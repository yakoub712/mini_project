function sendRegisterData() {
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;
    let id = document.querySelector("input[name='id']").value;
    let full_name = document.querySelector("input[name='full_name']").value;
    let email = document.querySelector("input[name='email']").value;
    let group_n = document.querySelector("input[name='group_n']").value;
    let messageElement = document.getElementById("message");

    console.log("بيانات قبل الإرسال:", { username, password, id, full_name, email, group_n });

    // التأكد من عدم ترك الحقول فارغة قبل الإرسال
    if (
        username.trim() === "" ||
        password.trim() === "" ||
        id.trim() === "" ||
        full_name.trim() === "" ||
        email.trim() === "" ||
        group_n.trim() === ""
    ) {
        messageElement.innerText = "⚠️ الرجاء إدخال جميع البيانات!";
        return;
    }

    // إرسال البيانات إلى `register.php` باستخدام `fetch()`
    fetch("http://localhost/min_p/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            password: password,
            id: id,
            full_name: full_name,
            email: email,
            group_n: group_n
        })
    })
    .then(response => response.json()) // التعامل مع استجابة JSON من الخادم
    .then(data => {
            console.log("استجابة من الخادم:", data); // 🔹 طباعة البيانات للتحقق
            if (data.status === "success" && data.redirect) {
                window.location.href = data.redirect; // 🔹 التوجه مباشرة إلى الصفحة الصحيحة
            } else {
                messageElement.innerText = data.message;
            }
    })
    .catch(error => {
        console.error("❌ خطأ أثناء الاتصال بالخادم:", error);
        messageElement.innerText = "❌ حدث خطأ أثناء الاتصال بالخادم!";
    });
}

// ربط الدالة بزر تسجيل الحساب في HTML
document.querySelector(".button").addEventListener("click", function (event) {
    event.preventDefault(); // منع الإرسال التقليدي للنموذج
    sendRegisterData(); // استدعاء دالة إرسال البيانات
});
