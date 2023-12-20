<?php
class filteroptions extends REST
{   
    function __construct(){
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    public function Init(){
        $sql = $this->sql;
        $categoryId = $this->categoryId;
    
        if (isset($this->categoryId)){
            $queryBrands = "SELECT DISTINCT PROD_BRAND FROM app_products WHERE PROD_STATUS = '1' AND CTG_ID = {$categoryId} AND PROD_BRAND != ''";
            $stmtBrands = $sql->Execute($sql->Prepare($queryBrands));
            $brandsData = $stmtBrands->GetAll(PDO::FETCH_COLUMN);
    
            $queryOrigins = "SELECT DISTINCT PROD_ORIGIN FROM app_products WHERE PROD_STATUS = '1' AND CTG_ID = {$categoryId} AND PROD_ORIGIN != ''";
            $stmtOrigins = $sql->Execute($sql->Prepare($queryOrigins));
            $originsData = $stmtOrigins->GetAll(PDO::FETCH_COLUMN);
    
            $brands = [];
            $origins = [];
    
            // Extracting brand names
            foreach ($brandsData as $brand) {
                $brands[] = $brand['PROD_BRAND'];
            }
    
            // Extracting origins
            foreach ($originsData as $origin) {
                $origins[] = $origin['PROD_ORIGIN'];
            }
    
            $data = array(
                "brands" => $brands,
                "origins" => $origins
            );
    
            $this->response(array("msg" => "success", "data" => $data), 200);
        } else {
            $this->response(array("msg" => "Error", "data" => "No categoryId assigned"), 404);
        }
    }
    
    

}

