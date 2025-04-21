<?php
session_start();

// معلومات الاتصال بقاعدة البيانات
$host = "localhost";
$user = "root"; // اسم المستخدم الافتراضي في XAMPP
$pass = "";
$dbname = "min_project"; // اسم قاعدة البيانات الخاص بك

// إنشاء الاتصال بقاعدة البيانات مباشرة داخل `login.php`
$conn = new mysqli($host, $user, $pass, $dbname);

// التحقق من نجاح الاتصال
if ($conn->connect_error) {
    die(" فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// التحقق من بيانات تسجيل الدخول
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if ($username == "" || $password == "") {
        echo json_encode(["status" => "error", "message" => " الرجاء إدخال جميع البيانات!"]);
        exit;
    }

    // استعلام للتحقق من صحة اسم المستخدم وكلمة المرور
    $stmt = $conn->prepare("SELECT password FROM account WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($stored_password);
        $stmt->fetch();

      
        if ($password === $stored_password) {
            $_SESSION["user"] = $username;
            echo json_encode(["status" => "success", "redirect" => "Main Page/main_page.html"]); // تسجيل دخول ناجح
        } else {
            echo json_encode(["status" => "error", "message" => " كلمة المرور غير صحيحة!"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => " اسم المستخدم غير موجود!"]);
    }

    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
        http_response_code(200);
        exit;
    }

    $stmt->close();
    $conn->close();
}
?>
