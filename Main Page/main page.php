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


if (!isset($_SESSION["user"])) {
    header("Location: login.html"); // توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلًا الدخول
    exit;
}

//  جلب بيانات المستخدم
$user = $_SESSION["user"];
?>