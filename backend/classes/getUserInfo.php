<?php

class getuserinfo extends REST {
    function __construct() {
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init() {
        $sql = $this->sql;
        
        if (isset($this->usrCode)) {
            $usrCode = $this->usrCode;

            $stmt = $sql->Prepare("SELECT USR_FIRSTNAME, USR_OTHERNAME, USR_EMAIL, USR_PHOTO , USR_LOGIN_STATUS FROM app_users WHERE USR_CODE = ?");
            $result = $sql->Execute($stmt, array($usrCode));

            if ($result && $result->RecordCount() > 0) {
                $row = $result->FetchRow();
                $photoBase64 = null;
                if ($row['USR_PHOTO']) {
                    $photoBase64 = 'data:image/jpeg;base64,' . base64_encode($row['USR_PHOTO']);
                }
                $userInfo = array(
                    'firstname' => $row['USR_FIRSTNAME'],
                    'lastname' => $row['USR_OTHERNAME'],
                    'email' => $row['USR_EMAIL'],
                    'loginstatus' => $row['USR_LOGIN_STATUS'],
                    'photo' => $photoBase64
                );
                $this->response(array("msg" => "success", "data" => $userInfo), 200); 
            } else {
                $this->response(array("msg" => "error", "data" => "No user found"), 404);
            }
        } else {
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }
    }
}



