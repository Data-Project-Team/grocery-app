<?php

class like  extends REST
{
    function __construct(){
        parent::__construct();
        global$sql;
        $this->sql=$sql;
    }
    function Init(){
        $sql=$this->sql;
        
        $case = $_REQUEST['case'];
        $usrCode = $_REQUEST['usrCode'];
        $prodId = $_REQUEST['prodId'];

        switch ($case) {
            case "liked":
                $sql->Execute($sql->Prepare("UPDATE app_products SET  PROD_LIKE_COUNT = PROD_LIKE_COUNT + 1 WHERE PROD_ID = $prodId"));
                $query = "INSERT INTO app_wishlist (USR_CODE, PROD_ID) VALUES (?, ?)";
                $stmt = $sql->Prepare($query);

                if ($stmt) {
                    $result = $sql->Execute($stmt, array($usrCode, $prodId));
            
                    if ($result) {
                        // Successful operation, return a success response
                        $this->response(array("msg" => "success", "data"=>"liked"), 200); 
                    } else {
                        // Error in query execution
                        $this->response(array("msg" => "error", "data"=> $sql->ErrorMsg()), 204);
                    }
                } else {
                    // Error in prepared statement
                    $this->response(array("msg" => "error", "data"=> $sql->ErrorMsg()), 204);
                }
              break;
            case "unliked":
                $sql->Execute($sql->Prepare("UPDATE app_products SET  PROD_LIKE_COUNT = PROD_LIKE_COUNT - 1 WHERE PROD_ID = $prodId"));
                $query = "DELETE FROM app_wishlist WHERE USR_CODE = ? AND PROD_ID = ?";
                $stmt = $sql->Prepare($query);

                if ($stmt ) {
                    $result = $sql->Execute($stmt, array($usrCode, $prodId));
            
                    if ($result) {
                        // Successful operation, return a success response
                        $this->response(array("msg" => "success", "data"=>"unliked"), 200); 
                    } else {
                        // Error in query execution
                        $this->response(array("msg" => "error", "data"=> $sql->ErrorMsg()), 204);
                    }
                } else {
                    // Error in prepared statement
                    $this->response(array("msg" => "error", "data"=> $sql->ErrorMsg()), 204);
                }
                
              break;
            default:
            $this->response(array("msg"=>"success","data"=>"case-not-provided"), 404);  ;
        }
       
    
    
       
    }
    
}