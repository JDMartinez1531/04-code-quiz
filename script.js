// get necessary elements
const intro = document.getElementById("intro");
const start = document.getElementById("start");
const question = document.getElementById("question");
const quizDsply = document.getElementById("quiz");
const timer = document.getElementById("timer");
const scoreCard = document.getElementById("scoreCard");
const hScoreForm = document.getElementById("hScoreForm");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
var highScoreForm = document.querySelector("#highScoreForm");
var nameInput = document.querySelector("#name");
var scoreInput = document.querySelector("#highScore");

// create questions
let questions = [
  {
    question: "Select the appropriate HTML tag used for the largest heading",
    answers: ["Head", "H6", "Header", "H1"],
    correct: "D",
  },
  {
    question: "In CSS, what is he correct option to select all <p> tags?",
    answers: [".p {}", "p {}", "p ()", "p []"],
    correct: "B",
  },
  {
    question:
      "Select the property used to create space between the element’s border and inner content?",
    answers: ["spacing", "margin", "padding", "border"],
    correct: "C",
  },
  {
    question: "Select the option to make a list with numbered items?",
    answers: ["ol", "di", "ui", "list"],
    correct: "A",
  },
  {
    question:
      "Which of the following would compare a regular expression with a string?",
    answers: ["concat()", "match()", "search()", "replace()"],
    correct: "B",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["js", "scripting", "script", "javascript"],
    correct: "C",
  },
  {
    question: "How do you add a comment in javascript?",
    answers: ["//Comment", "comment//", "*/comment/*", "/*comment/*"],
    correct: "A",
  },
  {
    question: "How do you round 6.34 to the nearest integer?",
    answers: ["round(6.34)", "math.rnd(6.34)", "rnd(6.34)", "Math.round(6.34)"],
    correct: "D",
  },
];
//variables
let currentQuestion = 0;
let quizTime = 60;
var score = 0;
var submitBtn = document.querySelector("#submit");
var TIME;
const lastQuestion = questions.length - 1;

function renderQuestion() {
  let q = questions[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.answers[0];
  choiceB.innerHTML = q.answers[1];
  choiceC.innerHTML = q.answers[2];
  choiceD.innerHTML = q.answers[3];
}

start.addEventListener("click", startQuiz);

// start btn function
function startQuiz() {
  intro.className += " d-none";
  renderQuestion();
  renderScore();
  quizDsply.style.display = "block";
  renderCounter();
  TIME = setInterval(renderCounter, 1000);
}
// score
function renderScore() {
  scoreCard.style.display = "block";
  scoreCard.innerHTML = score;
}
// timer
function renderCounter() {
  timer.style.display = "block";
  timer.innerHTML = quizTime;
  quizTime--;
  if (quizTime === -1) {
    gameOver();
  }
}
// check answer
function checkAnswer(answer) {
  if (answer == questions[currentQuestion].correct) {
    score += 10;
    renderScore();
  } else {
    quizTime -= 10;
  }
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show hiscore form
    gameOver();
  }
}
var highScores = [];

var highScoreList = document.querySelector("#highScoreElement");
// render high score form
function gameOver() {
  clearInterval(TIME);
  quizDsply.style.display = "none";
  hScoreForm.style.display = "block";
  document.getElementById("highScore").value = score;
  init();
}
function renderHighScores() {
  highScoreList.innerHTML = "";
  // render new li for each high score
  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];
    var li = document.createElement("li");
    li.textContent = highScore.name + ' ' + highScore.score;
    li.setAttribute("data-index", i);
    highScoreList.appendChild(li);
  }
}

// get stored highScores from localStorage
// parse JSON string to an object
function init() {
  var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
  // If highscores were retrieved from localStorage, update the highScoreList array to it
  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }

  // render highScores to the DOM
  renderHighScores();
}

function storeHighScores() {
  //  Stringify and set "highScores" key in localStorage to HighScoreList array
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// when form is submitted
highScoreForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = nameInput.value.trim();

  var score = highScore.value

  // Return from function early if submitted name is blank
  if (name === "") {
    return;
  }

  // Add new highScore to highscores array, clear the input
  highScores.push({name: name, score: score});

  nameInput.value = "";
  scoreInput.value = "";

  // Store updated highscores in localStorage, re-render the list
  storeHighScores();
  renderHighScores();
});
