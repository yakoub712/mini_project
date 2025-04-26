// الكود الخاص بعرض بيانات المستخدم بعد التحقق من تسجيل الدخول

// دالة لاسترجاع البيانات من PHP
function fetchUserData() {
    fetch('main_page.php')  // استرجاع البيانات من صفحة PHP
      .then(response => {
        if (!response.ok) {
          throw new Error('حدث خطأ أثناء الاتصال بـ main_page.php');
        }
        return response.json();  // تحويل الاستجابة إلى JSON
      })
      .then(data => {
        if (data.status === "success") {
          // عرض البيانات في الصفحة إذا كان المستخدم مسجلاً
          document.getElementById('userData').innerHTML = `
            <p>اسم المستخدم: ${data.username}</p>
            <p>معرف المستخدم: ${data.user_id}</p>
            
          `;
        } else {
          // إذا لم يتم تسجيل الدخول، عرض رسالة
          document.getElementById('userData').innerText = data.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // عرض رسالة خطأ إذا حدث مشكلة في الاتصال
        document.getElementById('userData').innerText = "حدث خطأ أثناء استرجاع البيانات.";
      });
  }
  
  // استدعاء الدالة عند تحميل الصفحة
  window.onload = fetchUserData;
  