<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $image = $_FILES["image"]["name"];

    if (!empty($message) || !empty($image)) {
        // Save image
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);

        // Store message and image path in the text file
        $file = fopen("messages.txt", "a");
        fwrite($file, "<p>User: " . htmlspecialchars($message) . "</p>" . PHP_EOL);
        fwrite($file, "<img src='" . $target_file . "'>" . PHP_EOL);
        fclose($file);

        echo "Message stored successfully!";
    } else {
        echo "Message or image is empty!";
    }
} else {
    echo "Method not allowed!";
}
?>
