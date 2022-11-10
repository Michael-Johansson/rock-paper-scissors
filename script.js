const buttons = document.querySelectorAll("button");
const heading = document.querySelector(".heading");
const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const wrapper = document.querySelector(".wrapper");
const selections = document.querySelector(".selections");
const playerButtons = document.querySelector(".player-buttons");
let playerScore = 0;
let computerScore = 0;
let result = "";

window.onload = () => {
  wrapper.classList.add("wrapper-fade-in");
  wrapper.classList.remove("wrapper-hidden");
};

const playerWin = () => {
  playerScore++;
  result = "You win!";
};
const computerWin = () => {
  computerScore++;
  result = "You lost!";
};

function game() {
  function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
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
      computerChoice.classList.toggle("active");
      playerChoice.classList.toggle("player-active");
      setTimeout(() => {
        playRound(e.target.id, computerSelection);
      }, 1000);
      buttons.forEach((button) => {
        button.disabled = true;
      });
    });
  });

  function waitForComputer() {
    setTimeout(() => {
      heading.textContent = "3";
    }, 0);
    setTimeout(() => {
      heading.textContent = "2";
    }, 1000);
    setTimeout(() => {
      heading.textContent = "1";
    }, 2000);
    setTimeout(() => {

      if (playerScore == 5 && computerScore < playerScore) {
        heading.textContent = "You won the game!"
      } else if (computerScore == 5 && playerScore < computerScore) {
        heading.textContent = "You lost the game!"
      } else {
        heading.textContent = result;
      }
      player.textContent = playerScore;
      computer.textContent = computerScore;
      
      computerChoice.classList.toggle("active");
      playerChoice.classList.toggle("player-active");
      buttons.forEach((button) => {
        button.disabled = false;
      });
    }, 3000);
  }
}

game();
