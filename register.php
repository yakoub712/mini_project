<?php

header('Content-Type: application/json');
session_start();

// معلومات الاتصال بقاعدة البيانات
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "min_project";

// الاتصال بقاعدة البيانات
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "❌ فشل الاتصال بقاعدة البيانات!"]));
}
header("Access-Control-Allow-Origin: *"); // السماح بجميع الأصول
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// استلام البيانات من JavaScript بصيغة JSON
$inputData = json_decode(file_get_contents("php://input"), true);
$username = $inputData["username"] ?? "";
$password = $inputData["password"] ?? "";
$id = $inputData["id"] ?? "";
$full_name = $inputData["full_name"] ?? "";
$email = $inputData["email"] ?? "";
$group_n = $inputData["group_n"] ?? "";

// التحقق من إدخال جميع البيانات
if (empty($username) || empty($password) || empty($id) || empty($full_name) || empty($email) || empty($group_n)) {
    echo json_encode(["status" => "error", "message" => "⚠️ الرجاء إدخال جميع البيانات!"]);
    exit;
}

// التحقق مما إذا كان اسم المستخدم موجود مسبقًا في `account`
$stmt = $conn->prepare("SELECT id FROM account WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "❌ اسم المستخدم مستخدم بالفعل!"]);
    exit;
}

$stmt->close();

// تشفير كلمة المرور
$hashed_password = $password;

// إدخال البيانات في جدول `account`
$stmt = $conn->prepare("INSERT INTO account (id, username, password) VALUES (?, ?, ?)");
$stmt->bind_param("iss", $id, $username, $hashed_password);
$account_inserted = $stmt->execute();
$stmt->close();

if (!$account_inserted) {
    echo json_encode(["status" => "error", "message" => "❌ حدث خطأ أثناء إنشاء الحساب!"]);
    exit;
}

// إدخال البيانات في جدول `candidate` باستخدام `candidate_id`
$stmt = $conn->prepare("INSERT INTO candidate (candidate_id, full_name, email, group_n) VALUES (?, ?, ?, ?)");
$stmt->bind_param("issi", $id, $full_name, $email, $group_n);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "✅ تم إنشاء الحساب بنجاح!", "redirect" => "Authentication Page.html"]);
} else {
    echo json_encode(["status" => "error", "message" => "❌ حدث خطأ أثناء إدخال بيانات المرشح!"]);
}
$conn->close();
?>





















