debugger;
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
}

const playerSelection = prompt("What's your pick?").toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lost!";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lost!";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lost!";
  }

  if (playerSelection == computerSelection) {
    return "This match was a tie!";
  }

  if (
    playerSelection !== "rock" ||
    playerSelection !== "paper" ||
    playerSelection !== "scissors"
  ) {
    return "That is not a valid pick.";
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log(
  `You picked ${playerSelection} and Computer picked ${computerSelection}`
);
