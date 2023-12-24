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
        $minPrice = isset($_POST['min_price']) ? floatval($_POST['min_price']) : null;
        $maxPrice = isset($_POST['max_price']) ? floatval($_POST['max_price']) : null;

            $query = "SELECT ap.*, ac.CTG_NAME
                  FROM app_products ap
                  INNER JOIN app_ctg ac ON ap.CTG_ID = ac.CTG_ID
                  WHERE ";

            if ($searchTerm !== ''){
                $searchTerm = "%" . $searchTerm . "%";
                $query .= "(ap.PROD_NAME LIKE ? OR ap.PROD_SHORT_DISC LIKE ? OR ap.PROD_BRAND LIKE ? OR ac.CTG_NAME LIKE ?)";
                $params = array($searchTerm, $searchTerm, $searchTerm, $searchTerm);
                if ($minPrice !== null && $maxPrice !== null) {
                    $query .= " AND (PROD_FINAL_AMOUNT >= ? AND PROD_FINAL_AMOUNT <= ?)";
                    $params[] = $minPrice;
                    $params[] = $maxPrice;
                }
            }
            if ($searchTerm === ''){
            if ($minPrice !== null && $maxPrice !== null) {
                $query .= "(PROD_FINAL_AMOUNT >= ? AND PROD_FINAL_AMOUNT <= ?)";
                $params[] = $minPrice;
                $params[] = $maxPrice;
            }
        }

            $stmt = $sql->Prepare($query);

            if ($stmt) {
                $result = $sql->Execute($stmt, $params);

                if (!$result) {
                    $this->response(array("msg" => "error", "data" => "Search failed"), 204);
                } else {
                    $obj = $result->GetAll();
                    $searchinfo = [];

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
                $this->response(array("msg" => "error", "data" => "SQL Statement preparation failed"), 500);
            }

       
    }
}

