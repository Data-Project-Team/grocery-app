<?php

class updatecart  extends REST
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
            $quantity = $this->quantity;

            $stmt = $sql->Execute($sql->Prepare("UPDATE app_cart SET CART_QUANTITY = ?  WHERE USR_CODE = ? AND PROD_ID = ?"), array($quantity ,$usrCode, $prodId));

            if ($stmt) {
                $this->response(array("msg" => "success", "data"=>"Quantity updated successfully"), 200); 
            }else{
                $this->response(array("msg" => "error", "data"=>"Failed to update quantity"), 500); 
            }
        
          
        } else {
            $this->response(array("msg" => "error", "data"=> "Invalid request or missing parameters"), 400);
        }
                    
    }
}