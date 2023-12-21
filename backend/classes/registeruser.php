<?php

class registeruser extends REST
{
    function __construct(){
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }
    function Init(){
        $sql = $this->sql;
        $engine = new Engine();
        $crypt = new Crypt();
        $password = $crypt->loginPassword($this->usname,$this->pwd);
        $clientid = $engine->generateCode('app_users','COL','USR_CODE');
        $userapikey = $engine->generateAPIKey();
        $email = $this->usname;
        $username = $this->name;
       // var_dump($clientid.' | '.$password. ' | '. $userapikey); die();

        if(!empty($this->usname) && !empty($this->pwd)){
            // $sql->debug = true;
            $stmt = $sql->Execute($sql->Prepare("INSERT INTO app_users (USR_CODE,USR_USERNAME,USR_PASSWORD,USR_EMAIL,USR_APIKEY , USR_FIRSTNAME) VALUES(".$sql->Param('a').",".$sql->Param('b').",".$sql->Param('c').",".$sql->Param('d').",".$sql->Param('e'). ",".$sql->Param('f').")"),array($clientid,$this->usname,$password,$email,$userapikey , $username));

            if ($stmt == true){
                $checkinit = $sql->Execute($sql->Prepare("SELECT INIT_ID FROM app_init WHERE INIT_USRCODE=".$sql->Param('a')." "),array($this->userid));
                if($checkinit->RecordCount() >0){
                    $id = $checkinit->FetchRow();
                    $code = $id['INIT_ID'];
                    $sql->Execute($sql->Prepare("UPDATE app_init SET INIT_APIKEY=".$sql->Param('a').",INIT_USRCODE=".$sql->Param('b').",INIT_STATUS='2' WHERE INIT_ID=".$sql->Param('c').""),array($userapikey,$clientid,$code));
                    $stmte = $sql->Execute($sql->Prepare("SELECT USR_CODE,USR_EMAIL,USR_APIKEY FROM app_users WHERE USR_STATUS='1' AND USR_CODE=".$sql->Param('a')." AND USR_USERNAME=".$sql->Param('b')." "),array($clientid,$this->usname));
                    $result = $stmte->FetchRow();
                    $this->response(array('msg'=>'success','data'=>$result),200);
                }else{
                    $this->response(array('msg'=>'info','data'=>'user-not-found'),304);
                }
            }else{
                $this->response(array('msg'=>'error','data'=> $sql->ErrorMsg()),304);
            }
        }else{
            $this->response(array('msg'=>'info','data'=>'nouserid'),404);
        }
    }
}


