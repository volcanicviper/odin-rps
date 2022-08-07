const rps = ['Rock', 'Paper', 'Scissors'];

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

let playerSelection;

while (!rps.includes(playerSelection)) {
    playerSelection = capitalization(prompt("Rock, paper or scissors?"));
}


playRound(playerSelection, getComputerChoice());