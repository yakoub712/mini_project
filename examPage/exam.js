// import oop from "questions.js";

// import { lth, wad } from "./questions";


console.log(window.location.href.split("=")[1]);
document.addEventListener('keydown', function (e) {
  if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
    e.preventDefault();
    alert('Reload is disabled on this page.');
  }
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });

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
  },
  {
    question: "Which of the following is an example of polymorphism in OOP?",
    choices: [
      "A function that can take different types of arguments", "A class that can inherit from multiple classes"
    ],
    answer: "A function that can take different types of arguments",
    point: 2
  },
  {
    question: "What is the purpose of a constructor in a class?",
    choices: [
      "To initialize the object's properties", "To define the methods of the class"
    ],
    answer: "To initialize the object's properties",
    point: 1
  },
  {
    question: "In OOP, what is the term for a blueprint for creating objects?",
    choices: [
      "Class", "Object", "Instance", "Method"
    ],
    answer: "Class",
    point: 2
  },
  {
    question: "What is the term for a function that is defined inside a class?",
    choices: [
      "Method", "Function", "Procedure", "Routine"
    ],
    answer: "Method",
    point: 3
  },
  {
    question: "In OOP, what is the term for a variable that belongs to a class rather than an instance of the class?",
    choices: [
      "Instance variable", "Class variable", "Static variable", "Global variable"
    ],
    answer: "Class variable",
    point: 2
  },
  {
    question: "Which of the following is not a type of inheritance in OOP?",
    choices: [
      "Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Circular inheritance"
    ],
    answer: "Circular inheritance",
    point: 3
  },
]
let bdd = [
  {
    question: "What does SQL stand for?",
    choices: [
      "Structured Query Language", "Structured Question Language"
    ],
    answer: "Structured Query Language",
    point: 2,
  },
  {
    question: "Which SQL statement is used to extract data from a database?",
    choices: [
      "GET", "SELECT"
    ],
    answer: "SELECT",
    point: 1
  },
  {
    question: "Which SQL statement is used to update data in a database?",
    choices: [
      "UPDATE", "MODIFY"
    ],
    answer: "UPDATE",
    point: 3
  },
  {
    question: "Which SQL statement is used to delete data from a database?",
    choices: [
      "DELETE", "REMOVE"
    ],
    answer: "DELETE",
    point: 1
  },
  {
    question: "Which SQL statement is used to create a new table in a database?",
    choices: [
      "CREATE TABLE", "NEW TABLE", "MAKE TABLE", "ADD TABLE"
    ],
    answer: "CREATE TABLE",
    point: 2
  },
  {
    question: "Which SQL statement is used to add a new column to an existing table?",
    choices: [
      "ALTER TABLE", "ADD COLUMN", "MODIFY TABLE", "CHANGE TABLE"
    ],
    answer: "ALTER TABLE",
    point: 2
  },
  {
    question: "Which SQL statement is used to remove a table from a database?",
    choices: [
      "DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"
    ],
    answer: "DROP TABLE",
    point: 2
  },
  {
    question: "Which SQL function is used to count the number of rows in a table?",
    choices: [
      "COUNT()", "SUM()", "TOTAL()", "NUM()"
    ],
    answer: "COUNT()",
    point: 2
  },
  {
    question: "Which SQL clause is used to filter records?",
    choices: [
      "WHERE", "FILTER"
    ],
    answer: "WHERE",
    point: 2
  },
  {
    question: "Which SQL statement is used to create a view?",
    choices: [
      "CREATE VIEW", "NEW VIEW", "MAKE VIEW", "ADD VIEW"
    ],
    answer: "CREATE VIEW",
    point: 3
  },
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
    point: 2,
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
  },
  {
    question: "Which HTML element is used to define the structure of a web page?",
    choices: [
      "<div>", "<section>"
    ],
    answer: "<div>",
    point: 2
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets", "Cascading Style System", "Cascading Style Script", "Cascading Style Syntax"
    ],
    answer: "Cascading Style Sheets",
    point: 2
  },
  {
    question: "Which property is used to change the background color in CSS?",
    choices: [
      "bgcolor", "background-color", "color", "background"
    ],
    answer: "background-color",
    point: 2
  },
  {
    question: "Which CSS property controls the text size?",
    choices: [
      "font-size", "text-size", "text-style", "font-style"
    ],
    answer: "font-size",
    point: 2
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    choices: [
      "text-color", "color", "font-color", "background-color"
    ],
    answer: "color",
    point: 2
  },
  {
    question: "Which HTML element is used to define an internal style sheet?",
    choices: [
      "<style>", "<css>"
    ],
    answer: "<style>",
    point: 2
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
    var examName = "DataBase Exam";
    module = bdd;
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
  console.log(result); // النتيجة النهائية
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
  // display.style.display = "none";

  // add back
  let back = document.getElementById("back");
  back.style.display = "block";
}



// Timer
const display = document.getElementById("timer");
let timeLeft = 20 * 60; // 30 minutes in seconds

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timer);
    // Do something when the timer ends
    submit.disabled = true;
    submit.style.backgroundColor = "gray";
    submit.style.cursor = "not-allowed";
    // diseable the radio buttons
    let inputs = document.querySelectorAll("input[type='radio']");
    inputs.forEach((input) => {
      input.disabled = true;
    })


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
    console.log(result); // النتيجة النهائية
    // Display the result
    let score = document.getElementById("score");
    score.innerHTML = `Your score is ${result} out of ${module.map(q => q.point).reduce((a, b) => a + b)}`;
    alert("Time's up!");
  }
}

updateTimer(); // initial call
const timer = setInterval(updateTimer, 1000);