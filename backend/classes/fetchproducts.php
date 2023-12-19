<?php
class fetchproducts  extends REST
{	
    function __construct(){
        parent::__construct();
        global$sql;
        $this->sql=$sql;
    }
    function Init(){
        $sql=$this->sql;
        $categoryId = isset($_REQUEST['categoryId']) ? $_REQUEST['categoryId'] : null;
        $fetchby = isset($_REQUEST['fetchby']) ? $_REQUEST['fetchby'] : null;
       
        

        $query = "SELECT * FROM app_products WHERE PROD_STATUS = '1'";

        if ($categoryId !== null) {
            $query .= " AND CTG_ID = $categoryId";
        }    
        if ($fetchby !== null){
            if ($fetchby === "trending") {
                $query .= "ORDER BY PROD_VIEW_COUNT DESC, PROD_LIKE_COUNT DESC ";
            }
            if ($fetchby === "onSale") {
                $query .= "AND PROD_DISCOUNT > 0";
            }
            if ($fetchby === "descending"){
                $query .= "ORDER BY PROD_FINAL_AMOUNT DESC";
            }
            if ($fetchby === "ascending"){
                $query .= "ORDER BY PROD_FINAL_AMOUNT ASC";
            }
            if ($fetchby === "newest"){
                $query .= "ORDER BY PROD_INPUTED_DATE ASC";
            }
                
        }

        if ($this->usrCode !==null) {
             
        
            $stmt= $sql->Execute($sql->Prepare($query));  

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
                        'details'=>$val['PROD_DETAILS'],
                        'img' => $val['PROD_IMAGE'],
                        'liked' => $this->get_likes($this->usrCode, $val['PROD_ID']),
                        'quantity' => 1,
                        'brand' => $val['PROD_BRAND'],

                    );
                }
                $this->response(array("msg"=>"success","data"=>$productsById), 200); 
                
            } else {
                $this->response(array("msg"=>"Error", "data"=>"data-not-found"), 404); 
            }
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

