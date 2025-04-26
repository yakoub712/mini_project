
console.log(1000);

function sendLoginData() {
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;
    let messageElement = document.getElementById("message");
    // التأكد من عدم ترك الحقول فارغة قبل الإرسال
    if (username.trim() === "" || password.trim() === "") {
        messageElement.innerText = "⚠️ الرجاء إدخال جميع البيانات!";
        return;
    }
    console.log(username);
    console.log(username);

    fetch("http://127.0.0.1/min_p/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.json()) // تحويل الاستجابة إلى JSON
    .then(data => {
        if (data.status === "success") {
            window.location.href = "Main Page/main page.html"; // التوجه إلى الصفحة الرئيسية
    
        } else {
            messageElement.innerText = data.message; // عرض رسالة الخطأ داخل الصفحة
        }
    })
    .catch(error => {
        console.error("Error:", error);
        messageElement.innerText = "❌ حدث خطأ في الاتصال بالخادم!";
    });
  }

// ربط الدالة بزر تسجيل الدخول في HTML
document.querySelector(".login button").addEventListener("click", function(event) {
    event.preventDefault(); // منع الإرسال التقليدي للنموذج
    sendLoginData(); // استدعاء دالة التحقق من تسجيل الدخول

});