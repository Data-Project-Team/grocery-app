<?php
class addtocart extends REST {
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

            // Check if the product already exists in the user's cart
            $stmt = $sql->Execute($sql->Prepare("SELECT CART_ID, CART_QUANTITY FROM app_cart WHERE USR_CODE = ? AND PROD_ID = ?"), array($usrCode, $prodId));

            if ($stmt && $stmt->RecordCount() > 0) {
                // Product already exists in the cart, increment the quantity
                $cartItem = $stmt->FetchRow();
                $cartId = $cartItem['CART_ID'];
                $newQuantity = $cartItem['CART_QUANTITY'] + 1;

                $stmtUpdate = $sql->Execute($sql->Prepare("UPDATE app_cart SET CART_QUANTITY = ? WHERE CART_ID = ?"), array($newQuantity, $cartId));

                if ($stmtUpdate) {
                    // Quantity updated successfully
                    $this->response(array("msg" => "success", "data" => "Quantity increased for the product in the cart"), 200);
                } else {
                    // Error updating quantity
                    $this->response(array("msg" => "error", "data" => "Failed to increase quantity for the product in the cart"), 500);
                }
            } else {
                // Product doesn't exist in the cart, insert a new record
                $stmtInsert = $sql->Execute($sql->Prepare("INSERT INTO app_cart (USR_CODE, PROD_ID, CART_QUANTITY) VALUES (?, ?, 1)"), array($usrCode, $prodId));

                if ($stmtInsert) {
                    // Product added to cart successfully
                    $this->response(array("msg" => "success", "data" => "Product added to cart successfully"), 200);
                } else {
                    // Error adding product to cart
                    $this->response(array("msg" => "error", "data" => "Failed to add product to cart"), 500);
                }
            }
        } else {
            $this->response(array("msg" => "error", "data" => "Invalid request or missing parameters"), 400);
        }
    }
}
