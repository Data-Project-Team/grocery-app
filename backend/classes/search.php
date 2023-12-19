<?php
 
/**

 * @author Rewan
 */
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
            $stmt = $sql->Prepare("SELECT * FROM app_products WHERE PROD_NAME LIKE ? OR PROD_SHORT_DISC LIKE ? OR PROD_DISCRIPTION LIKE ? OR PROD_BRAND LIKE ? OR PROD_FINAL_AMOUNT LIKE ?");
            $result = $sql->Execute($stmt, array($searchTerm, $searchTerm , $searchTerm , $searchTerm ,  $searchTerm));
        
            if (!$result) {
                $this->response(array("msg" => "error", "data" => "Search failed"), 204);
            } else {
                $obj = $result->GetAll();
                foreach ($obj as $key => $val) {
                    $searchinfo[] = array(
                        'id' => $val['PROD_ID'],
                        'rootid' => $val['CTG_ID'],
                        'subid' => $val['SUB_CTG_ID'],
                        'childid' => $val['CHILD_CTG_ID'],
                        'name' => $val['PROD_NAME'],
                        'short_disc' => $val['PROD_SHORT_DISC'],
                        'long_disc' => $val['PROD_DISCRIPTION'],
                        'price' => $val['PROD_FINAL_AMOUNT'],
                        'img' => $val['PROD_IMAGE'],
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


