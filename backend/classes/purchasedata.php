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

            // Fetch purchase count based on $prodId
            $stmtTotal = $sql->Execute($sql->Prepare("SELECT COUNT(*) AS totalPurchaseCount FROM app_orders WHERE PROD_ID = ?"), array($prodId));
            $stmtLast24Hours = $sql->Execute($sql->Prepare("SELECT COUNT(*) AS last24HourCount FROM app_orders WHERE PROD_ID = ? AND ORDER_DATE >= NOW() - INTERVAL 1 DAY"), array($prodId));

            if ($stmtTotal && $stmtLast24Hours) {
                $totalPurchaseCount = $stmtTotal->FetchRow()['totalPurchaseCount'];
                $last24HourCount = $stmtLast24Hours->FetchRow()['last24HourCount'];

                // Return the data as JSON
                $this->response(array("msg" => "success", "data" => array("totalPurchaseCount" => $totalPurchaseCount, "last24HourCount" => $last24HourCount)), 200);
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
