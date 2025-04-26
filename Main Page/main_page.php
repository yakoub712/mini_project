<?php
session_start();

// تحقق إذا كان المستخدم قد قام بتسجيل الدخول
if (!isset($_SESSION["user_id"])) {
    echo json_encode(["status" => "error", "message" => "لم تقم بتسجيل الدخول!"]);
    exit;
}

// جلب بيانات المستخدم من الجلسة
$user_id = $_SESSION["user_id"];
$username = $_SESSION["username"];

// يمكن هنا جلب المزيد من البيانات من قاعدة البيانات إذا لزم الأمر
echo json_encode([
    "status" => "success",
    "user_id" => $user_id,
    "username" => $username
]);
?>