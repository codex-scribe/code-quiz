var currentQuestion = 0;
// var submitButton = [];
// submitButton = document.querySelectorAll(".submit");
var finalScore;
var questionArea = document.querySelector("#questionArea");
var startButton = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var currentTime = 80;
var timerInterval;
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
    answers: { a: "red", b: "orange", c: "yellow", d: "purple" },
    correct: "a",
  },
];

startButton.addEventListener("click", startTest);
document.querySelector("#end-game").addEventListener('click', function() {
    console.log('end the timer')
    
    clearInterval(
        timerInterval
    )
})

function displayQuestion() {
    questionArea.innerHTML = "";
  const outerDiv = document.createElement("div");
  outerDiv.innerHTML = `
    <h4>${questions[currentQuestion].questionText}</h4>
    <button class="answerChoice" data-choice="a">${questions[currentQuestion].answers.a}</button>
    <button class="answerChoice" data-choice="b">${questions[currentQuestion].answers.b}</button>
    <button class="answerChoice" data-choice="c">${questions[currentQuestion].answers.c}</button>
    <button class="answerChoice" data-choice="d">${questions[currentQuestion].answers.d}</button>`;
  questionArea.append(outerDiv);
  var buttonCollection = document.querySelectorAll(".answerChoice");
  for (var i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener("click", evaluate);
  }
}

function evaluate(event) {
  console.log(event.target.dataset.choice === questions[currentQuestion].correct);  

  currentQuestion++;
  displayQuestion();
}
//Adds event listeners for all of the clickable submit buttons
//for (var i = 0; i < submitButton.length; i++ ){
// submitButton[i].addEventListener("click", Quiz);
// submitButton[i].parentElement.style.display = "none";
//}

//Begins the quiz when the user clicks Go.
function startTest() {
  document.querySelector("#initial").style.display = "none";
  timerEl.textContent = `time left = ${currentTime}`;
  timerInterval = setInterval(() => {
    currentTime--;
    timerEl.textContent = `time left = ${currentTime}`;
}, 1000)
  displayQuestion();
}
