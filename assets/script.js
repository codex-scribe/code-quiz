var currentQuestion = 0;
var finalScore;
var questionArea = document.querySelector("#questionArea");
var hsArea = document.querySelector("#hsArea");
var hsList = [];
var startButton = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var currentTime = 80;
var timerInterval;
var indivQuestion = [];
indivQuestion = document.querySelector("#indivQuestion");
var correctAnswer;

//Array of questions for the test
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

//Event listener to start test
startButton.addEventListener("click", startTest);

//Begins the quiz when the user clicks Go.
function startTest() {
  currentQuestion = 0;
  currentTime = 80;
  document.querySelector("#initial").style.display = "none";
  timerEl.textContent = `time left = ${currentTime}`;
  timerInterval = setInterval(() => {
    currentTime--;
    if (currentTime <= 0) {
      endGame();
    }
    timerEl.textContent = `time left = ${currentTime}`;
  }, 1000);
  displayQuestion();
}

//Function that renders the questions on the website
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

//Checks if answer is correct, then either calls the next question or ends the quiz
function evaluate(event) {
  if (event.target.dataset.choice !== questions[currentQuestion].correct) {
    currentTime -= 10;
    timerEl.textContent = `time left = ${currentTime}`;
    if (currentTime <= 0) {
      endGame();
    }
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    endGame();
  }
}

//Logic that runs when the game ends
function endGame() {
  finalScore = currentTime;
  clearInterval(timerInterval);
  var scoreForm = document.createElement("div");
  scoreForm.innerHTML = `
      <h4>Enter your initials to save your score!<h4>
      <input id="playerInitials"> <input type="submit" value ="submit" id="record">
    `;
  questionArea.append(scoreForm);
  scoreForm
    .querySelector("#record")
    .addEventListener("click", function (Pikachu) {
      Pikachu.preventDefault();
      var newEntry = {
        initials: document.querySelector("#playerInitials").value.trim(),
        score: finalScore,
      };
      var storedHsList = JSON.parse(localStorage.getItem("highscore"));
      console.log(storedHsList);
      console.log(typeof storedHsList);
      if (storedHsList == null) {
        hsList = [newEntry];
      } else {
        hsList = storedHsList;
        hsList.push(newEntry);
      }
      console.log(hsList);
      localStorage.setItem("highscore", JSON.stringify(hsList));
      //localStorage.setItem(document.querySelector("#playerInitials").value, finalScore);
      renderHighScores();
    });
}

function renderHighScores() {
  hsArea.innerHTML = "";
  var hsEl = document.createElement("ol");
  hsArea.appendChild(hsEl);
  for (var i = 0; i < hsList.length; i++) {
    var entry = hsList[i];
    console.log(entry);
    var li = document.createElement("li");
    li.innerHTML = `<span class='hsInitials'> ${entry.initials} </span><span class ='score'> ${entry.score} </span>`;
    hsArea.append(li);
  };
  var playAgainBtn = document.createElement("div");
  playAgainBtn.innerHTML = "<button id='play-again'>Play Again</button>";
  hsArea.appendChild(playAgainBtn);
  playAgainBtn.addEventListener("click", function(){
    hsArea.innerHTML='';
    startTest()});
  
}
