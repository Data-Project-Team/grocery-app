<?php
class check_out extends REST {
    function __construct() {
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init() {
        $sql = $this->sql;

        if (isset($this->usrCode) && isset($this->prodId)) {
            $usrCode = $this->usrCode;
            $prodId = $this->prodId;

            // Assuming you have user information like $usrCode, $prodId in your request


            $sqlInsert = $sql->Execute($sql->Prepare("INSERT INTO app_orders (USR_CODE, PROD_ID) VALUES (?, ?)"), array($usrCode, $prodId));

            if ($sqlInsert) {
                // Order successfully inserted
                $this->response(array("msg" => "success", "data" => "Order placed successfully"), 200);
            } else {
                // Handle the error
                $this->response(array("msg" => "error", "data" => "Failed to place the order"), 500);
            }
        } else {
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }
    }
}
?>
