console.log('Hello, World!');
const choices = ['Rock','Paper','Scissors'];

function computerPlay() {
  let result = choices[randomIndex()];
  return result;
}

function randomIndex() {
    let index = Math.floor(Math.random() * choices.length);
    return index;
}

function playRound (playerSelection, computerSelection) {
    let playerWins = 'Fantasitic! You win this round';
    let computerWins = 'Oops! You lost this round';
    let draw = `Draw! You both chose ${playerSelection}`;
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return draw;

    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() == 'scissors'){
        return playerWins;

    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() == 'rock'){
        return playerWins;

    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() == 'paper'){
        return playerWins;

    } 
    else  { 
        return computerWins;
    }
}
