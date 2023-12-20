<?php
class changepassword extends REST {
    function __construct() {
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init() {
        $sql = $this->sql;
        $crypt = new Crypt(); 

        if (isset($_POST['oldPassword'], $_POST['newPassword'], $_POST['userid']  , $_POST['username'])) {
            $oldPassword = $_POST['oldPassword'];
            $newPassword = $_POST['newPassword'];
            $username = $_POST['username'];
            $userId = $_POST['userid'];
            

            $hashedNewPassword = $crypt->loginPassword($username,$newPassword );
           

            $stmtGet = $sql->Prepare("SELECT USR_PASSWORD FROM app_users WHERE USR_CODE = ?");
            $storedPasswordResult = $sql->Execute($stmtGet, array($userId));
            if (!$storedPasswordResult) {
                error_log("Database Error: " . $sql->ErrorMsg());
                $this->response(array("msg" => "error", "data" => "Database error"), 500);
                return;
            }

            if ($storedPasswordResult->RecordCount() > 0) {
                $storedPasswordRow = $storedPasswordResult->FetchRow();
                $storedPassword = $storedPasswordRow['USR_PASSWORD'];

                if ($crypt->verifyPassword($username , $oldPassword, $storedPassword)) {
                    $stmtUpdate = $sql->Prepare("UPDATE app_users SET USR_PASSWORD = ? WHERE USR_CODE = ?");
                    $updateResult = $sql->Execute($stmtUpdate, array($hashedNewPassword, $userId));

                    if ($updateResult) {
                        $this->response(array("msg" => "success", "data" => "Password updated successfully"), 200);
                    } else {
                        error_log("Update Error: " . $sql->ErrorMsg());
                        $this->response(array("msg" => "error", "data" => "Failed to update password"), 500);
                    }
                } else {
                    $this->response(array("msg" => "error", "data" => "Incorrect old password"), 401);
                }
            } else {
                $this->response(array("msg" => "error", "data" => "User not found"), 404);
            }
        } else {
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }
    }
}
