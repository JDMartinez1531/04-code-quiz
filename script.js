// get necessary elements
const intro = document.getElementById("intro");
const start = document.getElementById("start");
const question = document.getElementById("question");
const quizDsply = document.getElementById("quiz");
const timer = document.getElementById("timer");
const scoreCard = document.getElementById("scoreContainer");
const hScoreForm = document.getElementById("hScoreForm");

// create questions
let questions = [
  {
    q: "Select the appropriate HTML tag used for the largest heading",
    answers: ["Head", "H6", "Header", "H1"],
    correct: "D",
  },
  {
    q: "In CSS, what is he correct option to select all <p> tags?",
    answers: [".p {}", "p {}", "<p> {}", "p []"],
    correct: "B",
  },
  {
    q:
      "Select the property used to create space between the element’s border and inner content?",
    answers: ["spacing", "margin", "padding", "border"],
    correct: "C",
  },
  {
    q: "Select the option to make a list with numbered items?",
    answers: ["<ol>", "<di>", "<ui>", "<list>"],
    correct: "A",
  },
  {
    q:
      "Which of the following would compare a regular expression with a string?",
    answers: ["concat()", "match()", "search()", "replace()"],
    correct: "B",
  },
  {
    q: "Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correct: "C",
  },
  {
    q: "How do you add a comment in javascript?",
    answers: ["//Comment", "<!--comment--!", "*/comment/*", "/*comment/*"],
    correct: "A",
  },
  {
    q: "How do you round 6.34 to the nearest integer?",
    answers: ["round(6.34)", "math.rnd(6.34)", "rnd(6.34)", "Math.round(6.34)"],
    correct: "D",
  },
];
//variables
let currentQuestion = 0;
const time = 60;
let score = 0;
let highscore;

// render questions

// start btn function

// score

// timer

// check answer

// answer is correct + 10 to score

// answer is incorrect -10 seconds

// render high score form
