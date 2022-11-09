

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lost!";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lost!";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lost!";
  }

  if (playerSelection == computerSelection) {
    return "This match was a tie!";
  }
}


