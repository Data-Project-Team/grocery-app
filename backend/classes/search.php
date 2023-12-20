<?php
 
class search extends REST
{
    function __construct(){
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }
    function Init(){
        $sql = $this->sql;
        $searchTerm = isset($_POST['term']) ? $_POST['term'] : '';

        if (!empty($searchTerm)) {
            $searchTerm = "%" . $searchTerm . "%";
            $stmt = $sql->Prepare("SELECT * FROM app_products WHERE PROD_NAME LIKE ? OR PROD_SHORT_DISC LIKE ?  OR PROD_BRAND LIKE ?");
            $result = $sql->Execute($stmt, array($searchTerm, $searchTerm,$searchTerm));
        
            if (!$result) {
                $this->response(array("msg" => "error", "data" => "Search failed"), 204);
            } else {
                $obj = $result->GetAll();
                foreach ($obj as $key => $val) {
                    $searchinfo[] = array(
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
                        'quantity' => 1,
                        'brand' => $val['PROD_BRAND'],
                    );
                }
                $this->response(array("msg" => "success", 'data' => $searchinfo), 200);
            }
        } else {
            // Handle the case when the search term is empty
            $this->response(array("msg" => "error", "data" => "Empty search term"), 204);
        }
         
    }
}


