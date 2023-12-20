<?php

/**
 * 
 * 
 * @author Rewan
 * 
 */
class fetchwishlist  extends REST
{
    function __construct(){
        parent::__construct();
        global$sql;
        $this->sql=$sql;
    }
    function Init(){
        $sql=$this->sql;
        $usrCode = $_REQUEST['usrCode'];
        $wishlist = array();

        $stmt= $sql->Execute($sql->Prepare("SELECT p.PROD_ID, p.PROD_NAME, p.PROD_DISCRIPTION, p.PROD_SHORT_DISC,p.PROD_DISCOUNT,p.PROD_IMAGE, p.PROD_FINAL_AMOUNT
        FROM app_products p
        JOIN app_wishlist w ON p.PROD_ID = w.PROD_ID
        WHERE w.USR_CODE = '$usrCode'"));  

        if ($stmt->RecordCount() > 0) {
            $obj = $stmt->GetAll();
            foreach ($obj as $key => $val) {
                $wishlist[] = array(
                    'id' => $val['PROD_ID'],
                    'name' => $val['PROD_NAME'],
                    'short_disc' => $val['PROD_SHORT_DISC'],
                    'long_disc' => $val['PROD_DISCRIPTION'],
                    'discount' => $val['PROD_DISCOUNT'],
                    'price_before' => number_format($val['PROD_DISCOUNT'],2),
                    'final_price' => round($val['PROD_FINAL_AMOUNT'] -($val['PROD_FINAL_AMOUNT'] * $val['PROD_DISCOUNT']/100), 2),
                    'img' => $val['PROD_IMAGE'],
                    'liked' => $this->get_likes($this->usrCode, $val['PROD_ID']),
                    'brand' => $val['PROD_BRAND'],
                    'origin' => $val['PROD_ORIGIN'],
                );
            }
            $this->response(array("msg"=>"success","data"=>$wishlist), 200); 
            
        } else {
            $this->response(array("msg"=>"Error", "data"=>$wishlist), 200); 
        }
    }
    public function get_likes($user_code,$prod_id){
        $sql=$this->sql; $exits = '0';
        $stmt = $sql->Execute($sql->Prepare("SELECT PROD_ID FROM app_wishlist WHERE PROD_ID = ? AND USR_CODE = ? "), [$prod_id,$user_code]);
        if($stmt && $stmt->RecordCount() > 0){
            $exits = '1';
        }else{
            $exits = '0';
        }
        return $exits;
    }
    
}