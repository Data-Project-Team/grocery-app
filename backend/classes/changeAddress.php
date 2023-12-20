<?php
class changeAddress extends REST {
    function __construct() {
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init() {
        $sql = $this->sql;

        // Check for the required parameters
        if (isset($_POST['street']) && isset($_POST['city']) && isset($_POST['state']) && isset($_POST['country']) && isset($_POST['zip'] )&& isset($_POST['userCode'] )) {
            
            $street = $_POST['street'];
            $city = $_POST['city'];
            $state = $_POST['state'];
            $country = $_POST['country'];
            $zip = $_POST['zip'];
            $userCode = $_POST['userCode'];


            

            // Prepare and bind parameters
            $stmt = $sql->Prepare("INSERT INTO app_addresses ( StreetAddress, City, State, Country , ZipCode , USER_CODE) VALUES ( ?, ?, ?, ? , ? , ?)");

    
            $stmtUpdate = $sql->Execute($stmt, array($street, $city, $state, $country ,$zip , $userCode));
            

            if ($stmtUpdate) {
                // Address updated successfully
                error_log("SQL Error: " . $sql->ErrorMsg());
                $this->response(array("msg" => "success", "data" => "Address updated successfully"), 200);
            } else {
                // Error updating address
                error_log("SQL Error: " . $sql->ErrorMsg());
                $this->response(array("msg" => "error", "data" => "Failed to update address"), 500);
            }
        } else {
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }

            
    }
}

