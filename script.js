const buttons = document.querySelectorAll("button");
const heading = document.querySelector(".heading");
const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
let playerScore = 0;
let computerScore = 0;

function game() {
  function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      heading.textContent = "You win!";
      player.textContent = playerScore;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      heading.textContent = "You lost!";
      computer.textContent = computerScore;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      heading.textContent = "You win!";
      player.textContent = playerScore;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      heading.textContent = "You lost!";
      computer.textContent = computerScore;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore++;
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      heading.textContent = "You win!";
      player.textContent = playerScore;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      heading.textContent = "You lost!";
      computer.textContent = computerScore;
    }

    if (playerSelection == computerSelection) {
      heading.textContent = "Tie!";
      playerChoice.src = `images/${playerSelection}.png`;
      computerChoice.src = `images/${computerSelection}.png`;
      playerScore;
      computerScore;
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const computerSelection = getComputerChoice();
      playRound(e.target.id, computerSelection);
    });
  });
}

game();
