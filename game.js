let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = parseInt(Math.random() * 3);
  return computerChoice === 0
    ? "rock"
    : computerChoice === 1
    ? "paper"
    : "scissors";
}

function getHumanChoice() {
  let humanChoice = prompt("Choose your move (Rock, Paper, Scissors)").toLowerCase();
  humanChoice === "rock" ||
  humanChoice === "paper" ||
  humanChoice === "scissors"
    ? humanChoice
    : (alert("valeur incorrecte"), getHumanChoice());
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  (humanChoice === "rock" && computerChoice === "scissors") ||
  (humanChoice === "scissors" && computerChoice === "paper") ||
  (humanChoice === "paper" && computerChoice === "rock")
    ? (humanScore++,
      console.log("You win this round " + humanChoice + " beats " + computerChoice))
    : (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "rock")
    ? (computerScore++,
      console.log("You lose this round " + computerChoice + " beats " + humanChoice))
    : console.log("Same choice");
}

function playGame(x) {
  for (let i = 0; i < x; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // console.log(humanScore, computerScore);
  }
  let Winner = (humanScore > computerScore ? "Human win with a score of " + humanScore :
  humanScore < computerScore ? "Computer win with a score of " + computerScore :
  "Same score, no winner on 5 rounds")
  return console.log(Winner)
}

playGame(5)