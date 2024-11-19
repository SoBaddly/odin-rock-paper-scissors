var humanScore = 0;
var computerScore = 0;
const btns = document.querySelectorAll('.buttons button');
const gameWinner = document.createElement('p');
const contentResult = document.querySelector('.roundResult');

// Choix ordinateur aléatoire
function getComputerChoice() {
  let computerChoice = parseInt(Math.random() * 3);
  return computerChoice === 0
    ? 'Rock'
    : computerChoice === 1
    ? 'Paper'
    : 'Scissors';
}

function getHumanChoice() {
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (humanScore == 5 || computerScore == 5) {
        return;
      } else {
        let humanChoice = btn.textContent;
        let computerChoice = getComputerChoice();
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

        if (humanScore === 5 || computerScore === 5) {
          let finalResult = document.createElement('p'); //créé phrase de fin
          contentResult.appendChild(finalResult);

          let buttonReset = document.createElement('button'); //créé bouton reset
          buttonReset.textContent = 'Reset the game';
          buttonReset.setAttribute('id', 'reset');
          contentResult.appendChild(buttonReset);

          if (humanScore === 5) {
            finalResult.textContent = 'End of the game, human win';
          } else {
            finalResult.textContent = 'End of the game, computer win';
          }
        }
      }
    });
  });
}

function reset() {
  contentResult.addEventListener('click', (e) => {
    while (contentResult.firstChild)
      contentResult.removeChild(contentResult.firstChild);
    humanScore = 0;
    computerScore = 0;
  });
}

getHumanChoice();
reset();
