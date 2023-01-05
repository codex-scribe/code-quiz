//var currentQuestion = document.querySelector("#indivQuestion");
// var submitButton = [];
// submitButton = document.querySelectorAll(".submit");
var finalScore;
var questionArea = document.querySelector("#questionArea");
var startButton = document.querySelector("#start");
var indivQuestion = [];
indivQuestion = document.querySelector("#indivQuestion");
var correctAnswer;
var questions = [
  {
    questionText: "Which of these is not a datatype in Javascript?",
    answers: { a: "String", b: "Boolean", c: "Image", d: "Number" },
    correct: "c",
  },
  {
    questionText: "What is the statement 'var x = 78' called?",
    answers: {
      a: "Declaration",
      b: "Disposition",
      c: "Definition",
      d: "Assignment",
    },
    correct: "a",
  },
  {
    questionText: "What is my favorite color",
    answers: {a: "red", b: "orange", c: "yellow", d: "purple" },
    correct: "a",
  },
];

startButton.addEventListener("click", startTest);

function displayQuestion() {
    const outerDiv = document.createElement("div");
    outerDiv.innerHTML = `
    <h4>${questions[0].questionText}</h4>
    <ul>
    <li>${questions[0].answers.a}</li>
    <li>${questions[0].answers.b}</li>
    <li>${questions[0].answers.c}</li>
    <li>${questions[0].answers.d}</li>
    </ul>`;
  questionArea.append(outerDiv);
}

//Adds event listeners for all of the clickable submit buttons
//for (var i = 0; i < submitButton.length; i++ ){
// submitButton[i].addEventListener("click", Quiz);
// submitButton[i].parentElement.style.display = "none";
//}

//Begins the quiz when the user clicks Go.
function startTest() {
  document.querySelector("#initial").style.display = "none";
  displayQuestion();
}
