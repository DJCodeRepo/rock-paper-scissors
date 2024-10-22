console.log('Hello World');

function getComputerChoice() {
    let num = Math.floor(Math.random() * (99));
    if (num < 33) return "rock";
    if (num < 66) return "paper";
    return "scissors";
}

console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors? ");
    return input.toLowerCase();
}

console.log(getHumanChoice());