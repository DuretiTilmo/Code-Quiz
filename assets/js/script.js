//Variable declaration 
var timeEl = document.querySelector(".timer-text");
var introEl = document.querySelector("#intro");
var questionsEl = document.querySelector("#listed-questions");
var questionEl = document.querySelector("#question");
var rightwrongEl = document.querySelector("#right-wrong");
var finalscoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var highscoresEl = document.querySelector("#high-scores");
var scoreslistEl = document.querySelector("#scores-list");
var scoreEl = document.querySelector("#score");
var startBtn = document.querySelector("#start");
var answerBtn = document.querySelectorAll("button.ansBtn");
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");
var submitBtn = document.querySelector("#submit");
var gobackBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clear");
var scoreBtn = document.querySelector("#view-score");

var secondsLeft = 75;
var questionCount = 0;
var scoreList = [];

//array of objects containing questions, answers and correct answers 
var questions = [
    {
        questionEl: "Commonly used data types DO Not include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        questionEl: "The condition in an if/else statement is enclosed with _____.",
        answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer: "2"
    },
    {
        questionEl: "Arrays in JavaScript can be used to store ______.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        questionEl: "String values must be enclosed within _______when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correctAnswer: "2"
    },
    {
        questionEl: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];
