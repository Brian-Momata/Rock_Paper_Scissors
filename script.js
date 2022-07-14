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
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return alert(`Draw! You both chose ${playerSelection}`);

    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() == 'scissors'){
        return alert('Fantasitic! You win this round');

    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() == 'rock'){
        return alert('Fantasitic! You win this round');

    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() == 'paper'){
        return alert('Fantasitic! You win this round');

    } 
    else  { 
        return alert('Oops! You lost this round');
    }
}


