const choices = ['Rock','Paper','Scissors']; // An array of choices the player will pick

function computerPlay() {
// function picks a random index from the choices array:
  let result = choices[randomIndex()];
  return result;
}

function randomIndex() {
    /* function decides how many items are in the choices array
    and applies the .random() and .floor() method to randomly select an element */

    let index = Math.floor(Math.random() * choices.length);
    return index;
}

function playRound (playerSelection, computerSelection) {
    /* compares the selection of the player with that of the computer
    and returns a winner of the round.
    */

    let playerWins = `Fantasitic! You win this round.\n${playerSelection} beats ${computerSelection} `;
    let computerWins = `Oops! You lost this round.\n${computerSelection} beats ${playerSelection}`;
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

function game() {

    /* Prompts the player to choose and object and plays 5 rounds
    Updates score after every round and compares the final score to decide the winner  */

    let youWon = 'Congrats! You Beat the Computer';
    let youLost = 'Dang it! The Computer Won';
    let playerScore = 0;
    let compScore = 0;
    
    for (let i = 0; i < 5; i++) {

        const playerSelection = prom('Choose between Rock, Paper and Scissors.');
        const computerSelection = computerPlay();
        let playerWins = `Fantasitic! You win this round.\n${playerSelection} beats ${computerSelection} `;
        let computerWins = `Oops! You lost this round.\n${computerSelection} beats ${playerSelection}`;
        let draw = `Draw! You both chose ${playerSelection}`;
        
        let result = playRound(playerSelection, computerSelection);

        if (result == playerWins) {
            playerScore += 1;
        }
        if (result == computerWins) {
            compScore += 1;
        }
        if (result == draw) {
            playerScore += 0;
            compScore += 0;
        }
        
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > compScore) {
        console.log(`${youWon}. The computer took ${compScore} rounds while you took ${playerScore} rounds.`)
    }
    else {
        console.log(`${youLost}. The computer took ${compScore} rounds while you took ${playerScore} rounds.`)
    }
}

game();
