// document.addEventListener("DOMContentLoaded", function () {
//     let username = localStorage.getItem("username");
//     let userId = localStorage.getItem("userid");
//     let fullName = localStorage.getItem("full_name");
//     let email = localStorage.getItem("email");
//     let group = localStorage.getItem("group_n");

//     if (username && userId) {
//         document.getElementById("username").innerText = `👤 اسم المستخدم: ${username}`;
//         document.getElementById("userid").innerText = `🆔 رقم التسجيل: ${userId}`;
//         document.getElementById("fullName").innerText = `📌 الاسم الكامل: ${fullName}`;
//         document.getElementById("email").innerText = `📧 البريد الإلكتروني: ${email}`;
//         document.getElementById("group").innerText = `🔹 المجموعة: ${group}`;
//     } else {
//         document.getElementById("userInfo").innerText = "⚠️ لم يتم العثور على بيانات المستخدم!";
//     }
// });

let exams = [
    {
        name: "POO",
        date: "2025-4-01",
        time: "10:00",
        duration: 30,
        nbrQuestion: 10,
        link: "#"
    },
    {
        name: "Web Application Development",
        date: "2025-4-01",
        time: "10:00",
        duration: 30,
        nbrQuestion: 10,
        link: "#"
    },
    {
        name: "Data Base",
        date: "2025-4-03",
        time: "10:00",
        duration: 30,
        nbrQuestion: 10,
        link: "#"
    }
]
