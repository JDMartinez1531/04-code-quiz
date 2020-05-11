// get necessary elements
const intro = document.getElementById("intro");
const start = document.getElementById("start");
const question = document.getElementById("question");
const quizDsply = document.getElementById("quiz");
const timer = document.getElementById("timer");
const scoreCard = document.getElementById("scoreContainer");
const hScoreForm = document.getElementById("hScoreForm");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

// create questions
let questions = [
  {
    question: "Select the appropriate HTML tag used for the largest heading",
    answers: ["Head", "H6", "Header", "H1"],
    correct: "D",
  },
  {
    question: "In CSS, what is he correct option to select all <p> tags?",
    answers: [".p {}", "p {}", "<p> {}", "p []"],
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
    answers: ["<ol>", "<di>", "<ui>", "<list>"],
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
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correct: "C",
  },
  {
    question: "How do you add a comment in javascript?",
    answers: ["//Comment", "<!--comment--!", "*/comment/*", "/*comment/*"],
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
const quizTime = 60;
let score = 0;
let highscore;
let TIME;

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
  quizDsply.style.display = "block";
  renderCounter();
  TIME = setInterval(renderCounter, 1000);
}
// score

// timer

// check answer

// answer is correct + 10 to score

// answer is incorrect -10 seconds

// render high score form
