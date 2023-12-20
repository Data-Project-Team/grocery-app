<?php

class getusercart  extends REST
{
    function __construct(){
        parent::__construct();
        global$sql;
        $this->sql=$sql;
    }
    function Init(){
        $sql=$this->sql;
        
        if (isset($this->usrCode)) {
            $usrCode = $this->usrCode;

            $stmt = $sql->Execute($sql->Prepare("
            SELECT c.CART_ID, c.USR_CODE, c.PROD_ID, c.CART_QUANTITY,
            p.PROD_NAME, p.PROD_FINAL_AMOUNT, p.PROD_DISCOUNT, p.CTG_ID, p.PROD_IMAGE
            FROM app_cart c
            INNER JOIN app_products p ON c.PROD_ID = p.PROD_ID
            WHERE c.USR_CODE = ?"), array($usrCode));

        
            $obj = $stmt->GetAll();
            foreach ($obj as $key => $val) {
            
                $products[] = array(
                    'id' => $val['PROD_ID'],
                    'rootid' => $val['CTG_ID'],
                    'name' => $val['PROD_NAME'],
                    'discount' =>$val['PROD_DISCOUNT'],
                    'price_before' => number_format($val['PROD_FINAL_AMOUNT'],2),
                    'final_price' => round($val['PROD_FINAL_AMOUNT'] -($val['PROD_FINAL_AMOUNT'] * $val['PROD_DISCOUNT']/100), 2),
                    'img' => $val['PROD_IMAGE'],
                    'quantity' => $val["CART_QUANTITY"],
                    'brand' => $val['PROD_BRAND'],
                    'origin' => $val['PROD_ORIGIN'],

                );
            }
            // Successful operation, return a success response
            $this->response(array("msg" => "success", "data"=>$products), 200); 
        
          
        } else {
            $this->response(array("msg" => "error", "data"=> "Invalid request or missing parameters"), 400);
        }
                    
    }
       
    
    
       
    
    
}