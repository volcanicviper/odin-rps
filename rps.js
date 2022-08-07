const rps = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)]; // pick num from 0 to 2 then print string from array
}

function playRound(playerSelection, computerSelection) {

}

let playerSelection;

while (!rps.includes(playerSelection)) {
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
}   // convert to lowercase in order to make it work regardless of capitalization


playRound(playerSelection, getComputerChoice());