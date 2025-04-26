// import oop from "questions.js";

// import { lth, wad } from "./questions";


console.log(window.location.href.split("=")[1]);

let oop = [
  {
    question: "What does OOP stand for?",
    choices: [
      "Object Oriented Programming", "Object Oriented Process"
    ],
    answer: "Object Oriented Programming",
    point: 2,
  },
  {
    question: "Which of the following is not a feature of OOP?",
    choices: [
      "Encapsulation", "Inheritance", "Polymorphism", "Compilation"
    ],
    answer: "Compilation",
    point: 1
  },
  {
    question: "In OOP, what is the term for a class that inherits from another class?",
    choices: [
      "Base class", "Derived class"
    ],
    answer: "Derived class",
    point: 3
  },
  {
    question: "What is the main purpose of encapsulation in OOP?",
    choices: [
      "To hide the internal state and require all interaction to be performed through an object's methods",
      "To allow one class to inherit the properties and methods of another class"
    ],
    answer: "To hide the internal state and require all interaction to be performed through an object's methods",
    point: 1
  }
]
let lth = [
  {
    question: "What does LTH stand for?",
    choices: [
      "Learning Through Hands-on", "Learning Through Theory"
    ],
    answer: "Learning Through Hands-on",
    point: 3
  },
  {
    question: "Which of the following is a benefit of LTH?",
    choices: [
      "Increased engagement and retention", "Less time-consuming"
    ],
    answer: "Increased engagement and retention",
    point: 2
  },
  {
    question: "What is a common method used in LTH?",
    choices: [
      "Lectures", "Workshops"
    ],
    answer: "Workshops",
    point: 1
  },
  {
    question: "LTH is primarily focused on which type of learning?",
    choices: [
      "Practical", "Theoretical"
    ],
    answer: "Practical",
    point: 2
  }
]
let wad = [
  {
    question: "Who is the big header in HTML",
    choices: [
      "h1", "h6"
    ],
    answer: "h1",
    point: 1
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    choices: [
      "<break>", "<br>"
    ],
    answer: "<br>",
    point: 1,
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    choices: [
      "alt", "src"
    ],
    answer: "alt",
    point: 2
  },
  {
    question: "Which HTML element defines the title of a document?",
    choices: [
      "<head>", "<title>"
    ],
    answer: "<title>",
    point: 3
  }
]
let module;
let exam = window.location.href.split("=")[1];
switch (exam) {
  case "wad":
    var examName = "Web Application Development Exam";
    module = wad;
    break;
  case "oop":
    var examName = "Object Oriented Programming Exam";
    module = oop;
    break;
  case "lth":
    var examName = "Learning Through Hands-on Exam";
    module = lth;
    break;
  default:
    var examName = "Unknown Exam";
}

document.querySelector("#examName").innerHTML = examName; // Exam Name
const list = document.querySelector("#questions"); // question list
const nav = document.querySelector("nav"); // nav bar


module.map((q, i) => {
  let article = document.createElement("article");
  let link = document.createElement("a");
  link.setAttribute("href", `#q-${i + 1}`);
  link.append(`Question ${i + 1}`)

  nav.append(link);

  article.setAttribute("id", `q-${i + 1}`)

  // The Number of Question and his Point
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerHTML = `Question ${i + 1} :`;
  let em = document.createElement("em");
  em.innerHTML = `( ${q.point} points )`;
  div.append(h3, em);
  div.setAttribute("class", "h-question");
  console.log(div)

  // The Question
  let p = document.createElement("p");
  p.innerHTML = q.question;

  // Adding the list of chooses
  let ul = document.createElement("ul");
  q.choices.map((c) => {
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("value", c);
    input.setAttribute("name", i);

    let li = document.createElement("li");

    li.append(input, c);
    ul.appendChild(li);

  })
  article.append(div, p, ul)

  list.appendChild(article);
})


// console.log(header);

const submit = document.getElementById("submit");

let answers = [];
submit.onclick = () => {

  module.map((q, i) => {
    if (document.querySelector(`input[name="${i}"]:checked`)) { // check if the question is answered
      answers.push(document.querySelector(`input[name="${i}"]:checked`).value);
    }
  })

  // Culc the score
  let result = 0;
  answers.map((a) => {
    module.map((q) => {
      if (a != null && q.choices.includes(a)) {
        if (a == q.answer) {
          result += q.point;
        }
      }
    })
  })
  console.log(result);
  // Display the result
  let score = document.getElementById("score");
  score.innerHTML = `Your score is ${result} out of ${module.map(q => q.point).reduce((a, b) => a + b)}`;
  // disable the submit button
  submit.disabled = true;
  submit.style.backgroundColor = "gray";
  submit.style.cursor = "not-allowed";
  // diseable the radio buttons
  let inputs = document.querySelectorAll("input[type='radio']");
  inputs.forEach((input) => {
    input.disabled = true;
  })

  // stop the timer
  clearInterval(timer);
  // disable the timer
  display.style.display = "none";

  // add back
  let back = document.getElementById("back");
  back.style.display = "block";
}



// Timer
const display = document.getElementById("timer");
let timeLeft = 10 * 60; // 30 minutes in seconds

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timer);
    // Do something when the timer ends
    alert("Time's up!");
  }
}

updateTimer(); // initial call
const timer = setInterval(updateTimer, 1000);