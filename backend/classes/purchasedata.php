
<?php
class purchasedata extends REST {
    function __construct() {
        parent::__construct();
        global $sql;
        $this->sql = $sql;
    }

    function Init() {
        $sql = $this->sql;

        if (isset($this->prodId)) {
            $prodId = $this->prodId;
            
            // Fetch purchase data based on $prodId
            $stmt = $sql->Execute($sql->Prepare("SELECT COUNT(*) AS purchaseCount FROM app_orders WHERE PROD_ID = ?"), array($prodId));

            if ($stmt && $stmt->RecordCount() > 0) {
                $purchaseCount = $stmt->FetchRow()['purchaseCount'];
            

                // Return the data as JSON
                $this->response(array("msg" => "success", "data" => array("purchaseCount" => $purchaseCount)), 200);
            } else {
                // Handle the error
                $this->response(array("msg" => "error", "data" => "Failed to fetch purchase data"), 500);
            }
        } else {
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }
    }
}
    ?>