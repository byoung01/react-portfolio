const questions = [
  {
    text: "Never gonna give you up, never gonna let you _______.",
    options: ["leave", "cry", "down", "run"],
    correctIndex: 2,
  },
  {
    text: "Op Op Op Op, Oppa Gangham _______!",
    options: ["design", "style", "dance", "party"],
    correctIndex: 1,
  },
  {
    text: "What did the ______ say?",
    options: ["falcon", "ferret", "flounder", "fox"],
    correctIndex: 3,
  },
];

const questionEl = document.querySelector("#question");
const optionsEl = document.querySelector("#options");
const start = document.querySelector("#start");
const startPrompt = document.querySelector("#startPrompt");
const endPrompt = document.getElementById("endPrompt");
const scoreBoard = document.getElementById("scoreBoard");
const highscore = document.getElementById("highscore");

endPrompt.style.display = "none";
var timer = document.getElementById("time");
var timeLeft = 25;
timer.innerHTML = "time left : " + timeLeft;
var score = 0;

let questionIndex = 0;
function renderQuestion() {
  if (questionIndex === questions.length) {
    endScreen();
  }
  const question = questions[questionIndex];
  questionEl.textContent = question.text;
  optionsEl.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    const button = document.createElement("button");
    button.textContent = option;
    optionsEl.append(button);
  }
}

optionsEl.addEventListener("click", function (e) {
  const element = e.target;
  const question = questions[questionIndex];
  if (!element.matches("button")) return;
  if (element.textContent === question.options[question.correctIndex]) {
    alert("Correct!");
    timeLeft = timeLeft + 5;
    score++;
    console.log(score);
  } else {
    alert("Incorrect!");
    timeLeft = timeLeft - 5;
  }
  questionIndex++;
  renderQuestion();
});

startButton.addEventListener("click", startGame);
function startGame() {
  startButton.style.display = "none";
  startPrompt.style.display = "none";
  startTime();
  renderQuestion();
}

function startTime() {
  var pleaseStop = setInterval(function countDown() {
    timeLeft--;
    timer.innerHTML = "time left : " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(pleaseStop);
      endScreen();
      return;
    }
  }, 1000);
}
function endScreen() {
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  endPrompt.style.display = "block";
  scoreBoard.textContent = `you got ${score} out of 3 correct!`;
  const scoreBtn = document.createElement("button");
  scoreBtn.innerHTML = "scores";
  highscore.append(scoreBtn);
  return;
}

function highscores() {}
