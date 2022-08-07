const rps = ['Rock', 'Paper', 'Scissors'];
let playerSelection;


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let selectionNum = rps.indexOf(playerSelection);
    if (selectionNum === computerSelection) {
        return("Draw!");
    }
    else if (selectionNum === computerSelection - 1) {
        return(`You lose! ${rps[computerSelection]} beats ${rps[selectionNum]}`);
    }
    else return (`You win! ${rps[selectionNum]} beats ${rps[computerSelection]}`);
}

function capitalization(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function game() {
    let playerScore = 0, computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, getComputerChoice());
        if (result.includes("win")) {
            playerScore += 1;
        }
        else if (result.includes("lose")) {
            computerScore += 1;
        }
        console.log(result);
        console.log("player score: " + playerScore + ", computer score: " + computerScore);
        
        playerSelection = null;
        while (!rps.includes(playerSelection)) {
            playerSelection = capitalization(prompt("Rock, paper or scissors?"));
        }
    }

    if (playerScore === computerScore) {
        return("Draw!");
    }
    else return(playerScore > computerScore ? "The player wins!" : "The computer wins!");
}


while (!rps.includes(playerSelection)) {
    playerSelection = capitalization(prompt("Rock, paper or scissors?"));
}


console.log(game());