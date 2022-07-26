const choices = ['rock','paper','scissors'];

function computerPlay() {
  let result = choices[randomIndex()];
  return result;
}

function randomIndex() {
    let index = Math.floor(Math.random() * choices.length);
    return index;
}

let roundResult = document.querySelector('.roundResult');
let yourScore = document.querySelector('.playerscore');
let computerScore = document.querySelector('.compscore');
let gameStatus = document.querySelector('.gameStatus');

roundResult.textContent = 'CHOOSE YOUR WEAPON TO START';

let playerScore = 0;
let compScore = 0;
let count = 1;
let gameOver = false;

function playRound (playerSelection, computerSelection) {

    if (!gameOver){
        if (playerSelection === computerSelection) {
        
            roundResult.textContent = `Draw! You both chose ${computerSelection}`;
            yourScore.textContent = `Your Score:${playerScore}`;
            computerScore.textContent = `Computer Score:${compScore}`;
            gameStatus.textContent = `Round ${count} Result`;
        }
        else if (playerSelection === 'rock' && computerSelection == 'scissors'){
            playerScore += 1;
            roundResult.textContent = `Fantastic! ${playerSelection} beats ${computerSelection}`;
            yourScore.textContent = `Your Score:${playerScore}`;
            computerScore.textContent = `Computer Score:${compScore}`;
            gameStatus.textContent = `Round ${count} Result`;
        }
        else if (playerSelection === 'paper' && computerSelection == 'rock'){
            playerScore += 1;
            roundResult.textContent = `Fantastic! ${playerSelection} beats ${computerSelection}`;
            yourScore.textContent = `Your Score:${playerScore}`;
            computerScore.textContent = `Computer Score:${compScore}`;
            gameStatus.textContent = `Round ${count} Result`;
        }
        else if (playerSelection === 'scissors' && computerSelection == 'paper'){
            playerScore += 1;
            roundResult.textContent = `Fantastic! ${playerSelection} beats ${computerSelection}`;
            yourScore.textContent = `Your Score:${playerScore}`;
            computerScore.textContent = `Computer Score:${compScore}`;
            gameStatus.textContent = `Round ${count} Result`;
        } 
        else  { 
            compScore += 1;
            roundResult.textContent = `Oops! ${computerSelection} beats ${playerSelection}`;
            yourScore.textContent = `Your Score:${playerScore}`;
            computerScore.textContent = `Computer Score:${compScore}`;
            gameStatus.textContent = `Round ${count} Result`;
        }
        count++;
            if (count > 5) {
                gameStatus.textContent = playerScore > compScore ? 'CONGRATS!\nYOU BANISHED THE COMPUTER!': 'SO UNFORTUNATE!\nTHE COMPUTER OVERPOWERED YOU';
                gameOver = true;
    }
    } else {
    return;
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetButton = document.querySelector('.resetbutton');

function resetGame() {
    roundResult.textContent = 'CHOOSE YOUR WEAPON TO START';
    yourScore.textContent = '';
    computerScore.textContent = '';
    gameStatus.textContent = '';
    compScore = 0;
    playerScore = 0;
    count = 1;
    gameOver = false;
}
rock.addEventListener('click', function(){
    playRound('rock', computerPlay());
});
paper.addEventListener('click', function(){
    playRound('paper', computerPlay());
});
scissors.addEventListener('click', function(){
    playRound('scissors', computerPlay());
});

resetButton.addEventListener('click', function(){
    resetGame();
});