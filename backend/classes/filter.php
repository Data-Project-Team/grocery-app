<?php
class filter extends REST
{   
    function __construct(){
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }
    private function getProductsByQuery($query) {
        $sql = $this->sql;

        if ($this->usrCode !== null) {
            $stmt = $sql->Execute($sql->Prepare($query));

            if ($stmt->RecordCount() > 0) {
                $obj = $stmt->GetAll();
                foreach ($obj as $key => $val) {
                    $productsById[] = array(
                        'id' => $val['PROD_ID'],
                        'rootid' => $val['CTG_ID'],
                        'name' => $val['PROD_NAME'],
                        'short_disc' => $val['PROD_SHORT_DISC'],
                        'long_disc' => $val['PROD_DISCRIPTION'],
                        'discount' =>$val['PROD_DISCOUNT'],
                        'price_before' => number_format($val['PROD_FINAL_AMOUNT'],2),
                        'final_price' => round($val['PROD_FINAL_AMOUNT'] -($val['PROD_FINAL_AMOUNT'] * $val['PROD_DISCOUNT']/100), 2),
                        'details' => $val['PROD_DETAILS'],
                        'img' => $val['PROD_IMAGE'],
                        'liked' => $this->get_likes($this->usrCode, $val['PROD_ID']),
                        'quantity' => 1,
                        'brand' => $val['PROD_BRAND'],
                        'origin' => $val['PROD_ORIGIN']
                    );
                }
                $this->response(array("msg" => "success", "data" => $productsById), 200); 
            } else {
                $this->response(array("msg" => "Error", "data" => "data-not-found"), 404); 
            }
        }
    }


    public function Init(){
        $sql = $this->sql;
        $categoryId = $this->categoryId;
    
        $conditions = [];
        $sortClause = '';
    
        if (isset($this->brand)) {
            $conditions[] = "PROD_BRAND = {$this->brand}";
        }
    
        if (isset($this->origin)) {
            $conditions[] = "PROD_ORIGIN = {$this->origin}";
        }
    
        if (isset($this->min) && isset($this->max)) {
            $conditions[] = "PROD_FINAL_AMOUNT BETWEEN {$this->min} AND {$this->max}";
        }
    
        if (isset($this->sortby)) {
            switch ($this->sortby) {
                case "trending":
                    $sortClause = "ORDER BY PROD_VIEW_COUNT DESC, PROD_LIKE_COUNT DESC";
                    break;
                case "descending":
                    $sortClause = "ORDER BY PROD_FINAL_AMOUNT DESC";
                    break;
                case "ascending":
                    $sortClause = "ORDER BY PROD_FINAL_AMOUNT ASC";
                    break;
                case "newest":
                    $sortClause = "ORDER BY PROD_INPUTED_DATE ASC";
                    break;
                default:
                    break;
            }
        }
    
        if (!empty($conditions)) {
            $whereClause = implode(' AND ', $conditions);
            $query = "SELECT * FROM app_products WHERE PROD_STATUS = '1' AND CTG_ID = {$categoryId} AND {$whereClause} {$sortClause}";
            $this->getProductsByQuery($query);
        } else {
            // Handle if no filter criteria provided
            $query = "SELECT * FROM app_products WHERE PROD_STATUS = '1' AND CTG_ID = {$categoryId} {$sortClause}";
            $this->getProductsByQuery($query);
        }
    }
    

    public function get_likes($user_code,$prod_id){
        $sql = $this->sql; 
        $exits = '0';
        $stmt = $sql->Execute($sql->Prepare("SELECT PROD_ID FROM app_wishlist WHERE PROD_ID = ? AND USR_CODE = ? "), [$prod_id,$user_code]);
        if($stmt && $stmt->RecordCount() > 0){
            $exits = '1';
        } else {
            $exits = '0';
        }
        return $exits;
    }
}
?>
