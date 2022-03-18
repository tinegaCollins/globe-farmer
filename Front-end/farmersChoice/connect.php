<?php
    $email = $_POST['email'];
    $number = $_POST['number']; 
    $password = $_POST['password'];
    $repeatpassword = $_POST['password'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $line = $_POST['line'];
    $product = $_POST['product'];
    $county = $_POST['county'];
    $town = $_POST['town'];
    $center = $_POST['center'];

    //database connection
    $conn = new mysqli('localhost', 'root', '', 'login_db');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    } else{
        $stmt = $conn->prepare("insert into users(email, number, password, repeatpassword, firstName,lastName, line, product, county, town, center) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sisssssssss",$email,$number, $password, $repeatpassword, $firstName, $lastName, $line, $product, $county, $town, $center);
        $stmt->execute();
        echo "Signedup successfully..";
        $stmt->close();
        $conn->close();
    }
?>
