"use strict";

const heading = document.querySelector(".heading");
const playerScore = document.querySelector(".player-score");
let playerCurrentScore = 0;
const playerChoice = document.querySelector(".player-selection");
const computerChoices = ["rock", "paper", "scissors"];
const computerChoice = document.querySelector(".computer-selection");
const computerScore = document.querySelector(".computer-score");
let computerCurrentScore = 0;
const gameRound = document.querySelector(".current-round");
let currentRound = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartButton = document.querySelector("#restart-btn");
const buttonContainer = document.querySelector(".button-container");
const buttons = document.querySelectorAll("button");

function computerSelection() {
  return computerChoices[Math.round(Math.random() * 2)];
}

function changeSvg(player, computer) {
  playerChoice.src = `images/${player}.svg`;
  computerChoice.src = `images/${computer}.svg`;
}

function playerWin() {
  heading.textContent = "You won!";
  heading.classList.remove("lost");
  heading.classList.add("won");
  playerCurrentScore++;
  playerScore.textContent = playerCurrentScore;
}

function computerWin() {
  heading.textContent = "You lost!";
  heading.classList.remove("won");
  heading.classList.add("lost");
  computerCurrentScore++;
  computerScore.textContent = computerCurrentScore;
}

function toggleFade() {
  computerChoice.classList.toggle("computer-fade-out");
  playerChoice.classList.toggle("player-fade-out");
  heading.classList.remove("lost");
  heading.classList.remove("won");
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function updateGameRound() {
  currentRound++;
  gameRound.textContent = currentRound;
}

function restartGame() {
  currentRound = 0;
  gameRound.textContent = currentRound;
  playerCurrentScore = 0;
  playerScore.textContent = playerCurrentScore;
  computerCurrentScore = 0;
  computerScore.textContent = computerCurrentScore;

  playerChoice.src = "images/question-mark.svg";
  computerChoice.src = "images/question-mark.svg";

  buttonContainer.style.display = "block";
  restartButton.style.display = "none";
  heading.textContent = "Rock Paper Scissors";
  heading.classList.remove("won");
  heading.classList.remove("lost");
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerWin();
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWin();
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    playerWin();
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    computerWin();
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWin();
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    computerWin();
  } else if (playerSelection == computerSelection) {
    heading.textContent = "Tie!";
    heading.classList.remove("lost");
    heading.classList.remove("won");
  }

  changeSvg(playerSelection, computerSelection);

  if (playerCurrentScore >= 3) {
    heading.textContent = "You won the game!";
    heading.classList.add("won");
    buttonContainer.style.display = "none";
    restartButton.style.display = "block";
  }
  if (computerCurrentScore >= 3) {
    heading.textContent = "You lost the game!";
    heading.classList.add("lost");
    buttonContainer.style.display = "none";
    restartButton.style.display = "block";
  }
}

function countdown() {
  heading.textContent = "3";

  setTimeout(() => {
    heading.textContent = "2";
  }, 1000);

  setTimeout(() => {
    heading.textContent = "1";
  }, 2000);

  setTimeout(() => {
    toggleFade();
    enableButtons();
  }, 3000);
}

rockBtn.addEventListener("click", () => {
  updateGameRound();
  disableButtons();
  toggleFade();
  countdown();
  setTimeout(() => {
    playRound("rock", computerSelection());
  }, 3000);
});

paperBtn.addEventListener("click", () => {
  updateGameRound();
  disableButtons();
  toggleFade();
  countdown();
  setTimeout(() => {
    playRound("paper", computerSelection());
  }, 3000);
});

scissorsBtn.addEventListener("click", () => {
  updateGameRound();
  disableButtons();
  toggleFade();
  countdown();
  setTimeout(() => {
    playRound("scissors", computerSelection());
  }, 3000);
});

restartButton.addEventListener("click", restartGame);
