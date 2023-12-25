<?php

/**
 * oauthuser short summary.
 *
 * oauthuser description.
 *
 * @version 1.0
 * @author Reggie
 */


class oauthuser extends REST
{
    function __construct(){
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init(){
        $sql = $this->sql;
        try {
            $stmt = $sql->Execute($sql->Prepare("SELECT INIT_APIKEY FROM app_init WHERE INIT_APIKEY = ?"), array($_REQUEST['apikey']));
            if ($stmt && $stmt->RecordCount() > 0) {
                return true;
            } else {
                error_log("API Key not found or SQL Error: " . $sql->ErrorMsg());
                return false;
            }
        } catch (Exception $e) {
            error_log("Exception in oauthuser: " . $e->getMessage());
            return false;
        }
    }
}
