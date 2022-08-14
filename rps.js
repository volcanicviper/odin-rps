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

/* function game() {
    let playerScore = 0, computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if (result.includes("win")) {
            playerScore += 1;
        }
        else if (result.includes("lose")) {
            computerScore += 1;
        }
        console.log(result);
        console.log("player score: " + playerScore + ", computer score: " + computerScore);
    }

    if (playerScore === computerScore) {
        return("Draw!");
    }
    return(playerScore > computerScore ? "The player wins!" : "The computer wins!");
} */

const container = document.querySelector('#results');
const result = document.createElement('p');
const btn = document.querySelector(".btn");
btn.addEventListener("click", function() { 
    result.textContent = playRound(btn.id, getComputerChoice())
});
container.appendChild(result);


