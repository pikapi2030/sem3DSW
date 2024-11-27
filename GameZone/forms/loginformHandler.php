<?php
// Database connection
$servername = "localhost";
$db_username = "root"; // Replace with your MySQL username
$db_password = "";     // Replace with your MySQL password
$dbname = "gamezone";

$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Directly embed user input into the SQL query
    $sql = "SELECT pass FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) 
    {
        $row = $result->fetch_assoc();

        // Compare the provided password with the stored password
        if ($password === $row['pass']) {
            echo "Login successful! Welcome, " . htmlspecialchars($username) . ".";
            header("Location: ../index.php");

            
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "Invalid username or password.";
    }
} else {
    echo "Invalid request.";
}

$conn->close();
?>
