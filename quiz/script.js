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
var timer = document.getElementById("time");
var timeLeft = 60;

let questionIndex = 0;
function renderQuestion() {
  if (questionIndex === questions.length) {
    return;
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
    timeLeft = timeLeft + 10;
  } else {
    alert("Incorrect!");
    timeLeft = timeLeft - 10;
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
  var timeLeft = 60;
  setInterval(function () {
    timeLeft--;
    timer.innerHTML = "time left : " + timeLeft;

    if (timeLeft === 0) {
    }
  }, 1000);
}
function endScreen() {}
