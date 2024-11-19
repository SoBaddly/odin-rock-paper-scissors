//Choix humain en fonction du bouton
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    ((humanScore == 5) || (computerScore == 5))
      ? ((humanChoice = btn.textContent),
        playRound(humanChoice, getComputerChoice()))
      : (contentResult.appendChild(gameWinner),
        (humanScore = 5
          ? (gameWinner.textContent = 'Human is the winner')
          : (gameWinner.textContent = 'Computer is the winner')));
  });
});
// Résultat du round
function playRound(humanChoice, computerChoice) {
  const liContentResult = document.createElement('li');
  contentResult.appendChild(liContentResult);
  (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
  (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
  (humanChoice === 'Paper' && computerChoice === 'Rock')
    ? (humanScore++,
      (liContentResult.textContent = `You win this round ${humanChoice} beats ${computerChoice}. Results : ${humanScore} - ${computerScore}`))
    : (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
      (computerChoice === 'Scissors' && humanChoice === 'Paper') ||
      (computerChoice === 'Paper' && humanChoice === 'Rock')
    ? (computerScore++,
      (liContentResult.textContent = `You lose this round ${computerChoice} beats ${humanChoice}. Results : ${humanScore} - ${computerScore}`))
    : (liContentResult.textContent = `Same choice. Results : ${humanScore} - ${computerScore}`);
}

// const gameWinner = document.createElement('p');
// contentResult.appendChild(gameWinner);
// humanScore = 5
//   ? (gameWinner.textContent = 'Human is the winner')
//   : (gameWinner.textContent = 'Computer is the winner');

// function playGame(x) {
//   for (let i = 0; i < x; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     // console.log(humanScore, computerScore);
//   }
//   let Winner = (humanScore > computerScore ? "Human win with a score of " + humanScore :
//   humanScore < computerScore ? "Computer win with a score of " + computerScore :
//   "Same score, no winner on 5 rounds")
//   return console.log(Winner)
// }

// playGame(5)

// function getHumanChoice() {
//   let humanChoice = prompt("Choose your move (Rock, Paper, Scissors)").toLowerCase();
//   humanChoice === "rock" ||
//   humanChoice === "paper" ||
//   humanChoice === "scissors"
//     ? humanChoice
//     : (alert("valeur incorrecte"), getHumanChoice());
//   return humanChoice;
// }
