// import { wad, oop, lth } from "../questions.js";

console.log(window.location.href.split("=")[1]);

let exam = window.location.href.split("=")[1];
switch (exam) {
  case "wad":
    var examName = "Web Application Development Exam";
    break;
  case "oop":
    var examName = "Object Oriented Programming Exam";
    break;
  case "lth":
    var examName = "Learning Through Hands-on Exam";
    break;
  default:
    var examName = "Unknown Exam";
}

let header = document.querySelector("#examName");

document.querySelector("#examName").innerHTML = examName;

console.log(header);