const rps = ['Rock', 'Paper', 'Scissors'];

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Returns random number between 0 and 2, representing an element from the rps array
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

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

function game(btn) { 
    let result = playRound(btn.id, getComputerChoice());
    resultDisplay.textContent = result;

    if (result.includes("win")) {
        playerScore += 1;
    }
    else if (result.includes("lose")) {
        computerScore += 1;
    }
    scoreDisplay.textContent = `player score: ${playerScore}, computer score: ${computerScore}`;
}


const buttons = document.querySelector('#buttons');
const container = document.querySelector('#results');
const resultDisplay = document.createElement('p');
const scoreDisplay = document.createElement('p');
let playerScore = 0, computerScore = 0;

buttons.addEventListener("click", function(e) {
    if (e.target && e.target.matches(".btn")) {
        game(e.target);
    }
});

container.appendChild(resultDisplay);
container.appendChild(scoreDisplay);


