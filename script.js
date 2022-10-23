function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
}

let playerScore = 0;
let computerScore = 0;

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

  if (
    playerSelection !== "rock" ||
    playerSelection !== "paper" ||
    playerSelection !== "scissors"
  ) {
    return "That is not a valid pick.";
  }
}

function game() {
  for (let i = 0; i <= 4; i++) {
    const playerSelection = prompt("What's your pick?").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `You picked ${playerSelection} and Computer picked ${computerSelection}`
    );
    console.log(
      `Your score is ${playerScore} and Computer score is ${computerScore}`
    );

    console.log(" ");
    if (i == 4 && playerScore > computerScore) {
      console.log("Congratulations, you won the game");
    } else if (i == 4 && computerScore > playerScore) {
      console.log("Unfortunately, you lost the game");
    } else if (i == 4 && playerScore == computerScore) {
      console.log("This game resulted in a tie!");
    }
  }
}
game();
