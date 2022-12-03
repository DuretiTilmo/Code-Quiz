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

//Assigning Functions
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    startTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) { 
        questionEl.textContent = questions[id].questionEl;
        answer1Btn.textContent = questions[id].answers[0];
        answer2Btn.textContent = questions[id].answers[1];
        answer3Btn.textContent = questions[id].answers[2];
        answer4Btn.textContent = questions[id].answers[3];
    }
}

function checkAnswer(event) {
    event.preventDefault();
    rightwrongEl.style.display = "block";
    let p = document.createElement("p");
    rightwrongEl.appendChild(p);

 setTimeout(function () {
    p.style.display = "none";
    
}, 1000);

if (questions[questionCount].correctAnswer === event.target.value) {
    p.textContent = "Correct!" ;
} else if (questions[questionCount].correctAnswer !== event.target.value) {
    secondsLeft = secondsLeft - 10;
    p.textContent = "Wrong!" ;
}

if (questionCount < questions.length) {
    questionCount ++;
}
   setQuestion(questionCount);
}

function startTime() {
    let timeInterval = setInterval(function() {
        secondsLeft-- ;
        timeEl.textContent = "Time: "+ secondsLeft;

        if (secondsLeft === 0 || questionCount === questions.length) {
           clearInterval(timeInterval);
           questionsEl.style.display = "none";
           finalscoreEl.style.display = "block";
           scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

function addScore(event) {
    event.preventDefault();
    finalscoreEl.style.display = "none";
    highscoresEl.style.display = "block";

    let initial = initialsEl.value.toUpperCase();
    scoreList.push({initials: initial, score: secondsLeft});
    
    scoreslistEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = scoreList[i].initials + ":" + scoreList[i].score;
        scoreslistEl.append(li);
    }
    storeScores();
    displayScores();
}
  
function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    let storedScore = JSON.parse(localStorage.getItem("scoreList"));
    if (storedScore !== null) {
        scoreList = storedScore;
    }
}

function clearScores() {
    localStorage.clear();
    scoreslistEl.innerHTML="";
}

//event listeners
startBtn.addEventListener("click", startQuiz);

answerBtn.forEach(function(element){
element.addEventListener("click", checkAnswer);
}); 

submitBtn.addEventListener("click", addScore);

gobackBtn.addEventListener("click", function() {
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 75;
    timeEl.textContent = "Time: " + secondsLeft;
});

clearBtn.addEventListener("click", clearScores);

scoreBtn.addEventListener("click", function() {
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    }else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    }else {
        return alert("No scores to display");
    }
});

