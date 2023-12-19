<?php

class removefromcart  extends REST
{
    function __construct(){
        parent::__construct();
        global$sql;
        $this->sql=$sql;
    }
    function Init(){
        $sql=$this->sql;
        
        if (isset($this->usrCode)&&isset($this->prodId)) {
            $usrCode = $this->usrCode;
            $prodId = $this->prodId;

            $stmt = $sql->Execute($sql->Prepare("DELETE FROM app_cart WHERE USR_CODE = ? AND PROD_ID = ?"), array($usrCode, $prodId));

            if ($stmt) {
                $this->response(array("msg" => "success", "data"=>"Item removed from cart successfully"), 200); 
            }else{
                $this->response(array("msg" => "error", "data"=> $sql->ErrorMsg()), 304); 
            }
        
          
        } else {
            $this->response(array("msg" => "error", "data"=> "Invalid request or missing parameters"), 400);
        }
                    
    }
       
    
    
       
    
    
}