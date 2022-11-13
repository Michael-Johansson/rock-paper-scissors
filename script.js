"use strict";
const buttons = document.querySelectorAll(".button");
const heading = document.querySelector(".heading");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const container = document.querySelector(".container");
let playerScore = 0;
let computerScore = 0;
let result = "";

// Animating the container when document has loaded
window.onload = () => {
  container.classList.add("container-fade-in");
  container.classList.remove("container-hidden");
};

const playerWin = () => {
  playerScore++;
  result = "You win!";
};

const computerWin = () => {
  computerScore++;
  result = "You lost!";
};

const playAnimation = () => {
  computerChoice.classList.toggle("computer-active");
  playerChoice.classList.toggle("player-active");
};

const disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const enableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
  });
};

const restartGame = () => {
  heading.textContent = "Resetting in 3";
  setTimeout(() => {
    heading.textContent = "Resetting in 2";
  }, 1000);

  setTimeout(() => {
    heading.textContent = "Resetting in 1";
  }, 2000);

  setTimeout(() => {
    heading.textContent = "Rock Paper Scissors";
    heading.classList.remove("lose");
    heading.classList.remove("win");
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    enableButtons();
  }, 3000);
};

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
}

// Counts down then shows the round results, also checking if anyone won the game
function waitForComputer() {
  heading.textContent = "3";

  setTimeout(() => {
    heading.textContent = "2";
  }, 800);

  setTimeout(() => {
    heading.textContent = "1";
  }, 1600);

  setTimeout(() => {
    playAnimation();

    if (playerScore == 3) {
      disableButtons();
      setTimeout(() => {
        heading.textContent = "You won the game!";
        heading.classList.add("win");
      }, 100);

      setTimeout(() => {
        restartGame();
      }, 2200);
    } else if (computerScore == 3) {
      disableButtons();
      setTimeout(() => {
        heading.textContent = "You lost the game!";
        heading.classList.add("lose");
      }, 100);

      setTimeout(() => {
        restartGame();
      }, 2200);
    } else {
      setTimeout(() => {
        enableButtons();
        heading.textContent = result;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
      }, 100);
    }
  }, 2400);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWin();
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerWin();
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    playerWin();
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerWin();
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWin();
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerWin();
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
  }

  if (playerSelection == computerSelection) {
    playerChoice.src = `images/${playerSelection}.png`;
    computerChoice.src = `images/${computerSelection}.png`;
    playerScore;
    computerScore;
    result = "Tie!";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const computerSelection = getComputerChoice();
    waitForComputer();
    disableButtons();
    playAnimation();

    setTimeout(() => {
      playRound(e.target.id, computerSelection);
    }, 1000);
  });
});
