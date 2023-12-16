<?php
// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 // Check if file is uploaded
 if (isset($_FILES['fileToUpload'])) {

 // Check if the uploads directory is accessible and writable
 if (is_dir('uploads/') && is_writable('uploads/')) {
   echo 'The uploads directory is accessible and writable.';
 } else {
   echo 'The uploads directory is not accessible or writable.';
 }

 // Define the target directory for the uploaded file
 $target_dir = "uploads/";

 // Define the target file path
 $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

 // Move the uploaded file to the target directory
 if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars(basename($_FILES["fileToUpload"]["name"])). " has been uploaded.";

    // Get the category ID from the form data
    $category_id = $_POST['category_id'];

    // Include the mysqli extension
    include 'mysqli.php';

    // Create a new mysqli object
    $mysqli = new mysqli('127.0.0.1', 'root', '', 'grocery');

    // Check the connection
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Prepare the SQL statement
    $stmt = $mysqli->prepare("UPDATE app_ctg SET IMG = ? WHERE CTG_ID = ?");

    // Bind the parameters
    $stmt->bind_param("si", $target_file, $category_id);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Image path stored in the database successfully!";
    } else {
        echo "Error storing the image path in the database: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();

    // Close the connection
    $mysqli->close();
 } else {
    echo "Sorry, there was an error uploading your file.";
 }
 }
}
?>

<form action="upload.php" method="post" enctype="multipart/form-data">
 Select category:
 <select name="category_id">
 <option value="1">Fruits</option>
 <option value="2">Vegetables</option>
 <option value="3">Canned Goods</option>
 <option value="4">Dairy</option>
 <option value="5">Meat</option>
 <option value="6">Fish & Seafood</option>
 <option value="7">Condiments & Spices</option>
 <option value="8">Snacks</option>
 <option value="9">Bread & Bakery</option>
 <option value="10">Beverages</option>
 <option value="11">Pasta, Rice & Cereal</option>
 <option value="12">Frozen Foods</option>
 </select>
 Select image to upload:
 <input type="file" name="fileToUpload" id="fileToUpload">
 <input type="submit" value="Upload Image" name="submit">
</form>

