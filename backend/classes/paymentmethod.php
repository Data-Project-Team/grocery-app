<?php
class paymentmethod extends REST {
    function __construct() {
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init() {
        $sql = $this->sql;

        // Check for the required parameters
        if (isset($_POST['cardnumber']) && isset($_POST['nameoncard']) && isset($_POST['expirationdate']) && isset($_POST['cvv']) && isset($_POST['userCode']) ) {
            
            $cardnumber = $_POST['cardnumber'];
            $nameoncard = $_POST['nameoncard'];
            $expirationdate = $_POST['expirationdate'];
            $cvv = $_POST['cvv'];
            $userCode = $_POST['userCode'];
            


            

            // Prepare and bind parameters
            $stmt = $sql->Prepare("INSERT INTO app_payments ( CARD_NUMBER, NAME_ON_CARD, EXPIRATION_DATE, CVV, USER_CODE ) VALUES ( ?, ?, ?, ? , ?)");

    
            $stmtUpdate = $sql->Execute($stmt, array($cardnumber, $nameoncard, $expirationdate, $cvv , $userCode));
            

            if ($stmtUpdate) {
                // Address updated successfully
            
                $this->response(array("msg" => "success", "data" => "Address updated successfully"), 200);
            } else {
                // Error updating address
                error_log("SQL Error: " . $sql->ErrorMsg());
                $this->response(array("msg" => "error", "data" => "Failed to update address"), 500);
            }
        } else {
            error_log("SQL Error: " . $sql->ErrorMsg());
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }

            
    }
}

