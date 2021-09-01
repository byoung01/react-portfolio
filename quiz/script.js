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
var timer = document.getElementById("time");

endPrompt.style.display = "none";
//set to none so its not showing up until prompted to in a function
var timeLeft = 25;
//starting time on the timer
timer.innerHTML = "time left : " + timeLeft;
//displaying the timer on the HTML
var score = 0;
//keeps trck of how many questions answered as correct, set to 0

startButton.addEventListener("click", startGame);
//listens for start button to be clicked
function startGame() {
  //once clicked it runs this function ]]
  startButton.style.display = "none";
  startPrompt.style.display = "none";
  //hides the instruction text
  startTime();
  renderQuestion();
}

function startTime() {
  //starts the countdown on the timer
  var pleaseStop = setInterval(function countDown() {
    timeLeft--;
    timer.innerHTML = "time left : " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(pleaseStop);
      endScreen();
      //once timer hits zeros it clears the timer and runs a function display the endgame "screem"
      return;
    }
  }, 1000);
}

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
  //creates an element for the options buttons
  const question = questions[questionIndex];
  if (!element.matches("button")) return;
  if (element.textContent === question.options[question.correctIndex]) {
    alert("Correct!");
    //if score is correct it alerts the user
    timeLeft = timeLeft + 5;
    //increases time by 5 seconds
    score++;
    //adds to the score by 1
  } else {
    alert("Incorrect!");
    //if score is incorrect it alerts the user
    timeLeft = timeLeft - 5;
    //decrease time by 5 seconds
  }
  questionIndex++;
  renderQuestion();
});

function endScreen() {
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  //clears buttons and questions from hte screen
  endPrompt.style.display = "block";
  //displays the endpromt
  scoreBoard.textContent = `you got ${score} out of 3 correct!`;
  //saving score localy
  localStorage.setItem("score", score);
  //displays how many total questions were answered correctly
  //for a percentage was thinking of doing score = score / 3
  var prompt = window.prompt("enter name", "name");
  //saving name from prompt locally
  localStorage.setItem("name", prompt);

  const scoreBtn = document.createElement("button");
  scoreBtn.innerHTML = "scores";
  highscore.append(scoreBtn);
  //using this to create a button that will link to the highscores
  return;
}

// for the highscores ill use a localStorage.getItem for the name and score values.
//than set it to the innerHTML or textContent
//than will append it and display it
//to remove the name and score values ill set the inner text to ""
