<?php

class fetchcategory  extends REST
{
    function __construct(){
        parent::__construct();
        global$sql;
        $this->sql=$sql;
    }
    function Init(){
        $sql=$this->sql;
        // Define the SQL query
        $stmt= $sql->Execute($sql->Prepare("SELECT CTG_ID, CTG_NAME, IMG FROM app_ctg WHERE STATUS = 1"));
        

        if ($stmt) {
            $obj = $stmt->GetAll();
            foreach ($obj as $key => $val) {
                $category[] = array(
                    'id' => $val['CTG_ID'],
                    'name' => $val['CTG_NAME'],
                    'img' => $val['IMG'],
                );
            }
            $this->response(array("msg"=>"success","data"=>$category), 200); 
            
        } else {
            $this->response(array("msg"=>"Error", "data"=>$sql->ErrorMsg()), 204); // Handle any errors
        }
    }
    
}


