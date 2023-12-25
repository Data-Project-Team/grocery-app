<?php


	

    class initapps extends REST
{
    public function __construct(){
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init(){
        $sql = $this->sql;
        $engine = new Engine();
        $token = $engine->generateApiKey();  
        $userid = $engine->initUserCode('app_init', 'INIT', 'INIT_USRCODE');
        $addeddate = date("Y-m-d H:i:s"); // Corrected date format

        if ($token) {
            try {
                $stmt = $sql->Execute($sql->Prepare("INSERT INTO app_init (INIT_USRCODE, INIT_APIKEY, INIT_DATE_ADDED) VALUES (?, ?, ?)"), array($userid, $token, $addeddate));

                if ($stmt) {
                    $this->response(array('msg' => 'success', 'data' => array('initcode' => $token, 'initid' => $userid, 'imgurl' => $this->api_imgurl)), 200);
                } else {
                    error_log("SQL Error: " . $sql->ErrorMsg());
                    $this->response(array('msg' => 'no token', 'data' => $sql->ErrorMsg()), 204);
                }
            } catch (Exception $e) {
                error_log("Exception in initapps: " . $e->getMessage());
                $this->response(array('msg' => 'error', 'data' => 'Exception occurred'), 404);
            }
        } else {
            $this->response(array('msg' => 'error generating token'), 404);
        }
    }
}


