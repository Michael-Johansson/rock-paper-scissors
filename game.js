"use strict";

const heading = document.querySelector(".heading");
const playerScore = document.querySelector(".player-score");
const playerChoice = document.querySelector(".player-selection");
const computerChoices = ["rock", "paper", "scissors"];
const computerChoice = document.querySelector(".computer-selection");
const computerScore = document.querySelector(".computer-score");
const currentRound = document.querySelector(".current-round");
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

function playRound (playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    heading.textContent = "You lost!";
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    heading.textContent = "You won!";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    heading.textContent = "You won!";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    heading.textContent = "You lost";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    heading.textContent = "You won";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    heading.textContent = "You lost";
  }
  else if (playerSelection == computerSelection) {
    heading.textContent = "Tie!"
  }
  changeSvg(playerSelection, computerSelection);
  console.log(playerSelection, computerSelection);
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