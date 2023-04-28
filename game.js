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

function computerSelection() {
  return computerChoices[Math.round(Math.random() *2)];
}

function changeSvg (player, computer) {
  playerChoice.src = `images/${player}.svg`;
  computerChoice.src = `images/${computer}.svg`;
}

function playerWin () {
  heading.textContent = "You won!";
  playerCurrentScore++;
  playerScore.textContent = playerCurrentScore;
}

function computerWin () {
  heading.textContent = "You lost!";
  computerCurrentScore++;
  computerScore.textContent = computerCurrentScore;
}

function playRound (playerSelection, computerSelection) {
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
  }
  else if (playerSelection == computerSelection) {
    heading.textContent = "Tie!"
  }
  changeSvg(playerSelection, computerSelection);
  currentRound++
  gameRound.textContent = currentRound;
  console.log(playerSelection, computerSelection);
  console.log(playerCurrentScore);
}

rockBtn.addEventListener("click", () => {
  playRound("rock", computerSelection());
})

paperBtn.addEventListener("click", () => {
  playRound("paper", computerSelection());
})

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerSelection());
})