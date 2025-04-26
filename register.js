document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector(".login button");

  if (!button) {
    console.error(
      "❌ لم يتم العثور على زر التسجيل! تأكد من أن لديك العنصر في HTML."
    );
    return;
  }

  button.addEventListener("click", function (event) {
    event.preventDefault(); // ✅ منع الإرسال التقليدي للنموذج
    sendRegisterData();
  });
});

function sendRegisterData() {
  let formData = new FormData(document.querySelector(".login"));

  console.log("🔹 بيانات قبل الإرسال:", Object.fromEntries(formData));

  fetch("http://localhost/min_p/register.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)), // تحويل البيانات إلى JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("🔹 استجابة من الخادم:", data);
      let messageElement = document.getElementById("message");

      if (data.status === "success" && data.redirect) {
        window.location.href = data.redirect; // ✅ التوجيه بعد النجاح
      } else {
        messageElement.innerText = data.message; // ❌ عرض رسالة الخطأ
      }
    })
    .catch((error) => {
      console.error("❌ خطأ أثناء الاتصال بالخادم:", error);
      document.getElementById("message").innerText =
        "❌ حدث خطأ أثناء الاتصال بالخادم!";
    });
}
