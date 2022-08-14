const rps = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelector('#buttons');
const container = document.querySelector('#results');
const resultDisplay = document.createElement('p');
const scoreDisplay = document.createElement('p');
let playerScore = 0, computerScore = 0;

container.appendChild(resultDisplay);
container.appendChild(scoreDisplay);

// Picks a random number and returns its corresponding element from the rps array
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

// Convert choices to numbers for ease of comparison then return the round's result
function playRound(playerSelection, computerSelection) {
    let playerNum = rps.indexOf(playerSelection);
    let computerNum = rps.indexOf(computerSelection);
    if (playerNum === computerNum) {
        return("Draw!");
    }
    else if (playerNum === computerNum - 1) {
        return(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
    return(`You win! ${playerSelection} beats ${computerSelection}!`);
}

function game(playerSelection) { 
    let result = playRound(playerSelection, getComputerChoice());
    resultDisplay.textContent = result;

    if (result.includes("win")) {
        playerScore += 1;
    }
    else if (result.includes("lose")) {
        computerScore += 1;
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            scoreDisplay.textContent = "The player has 5 points! You win!";
        }
        else scoreDisplay.textContent = "The computer has 5 points! You lose!";
        playerScore = 0;
        computerScore = 0;
    }
    else {
        scoreDisplay.textContent = `player score: ${playerScore}, computer score: ${computerScore}`;
    }
}

// On button click, play the game using the button's id as the player's choice
buttons.addEventListener("click", function(e) {
    if (e.target.matches(".btn")) {
        game(e.target.id);
    }
});


