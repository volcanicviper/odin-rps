const rps = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)]; // pick num from 0 to 2 then print string from array
}