let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * (99));
    if (num < 33) return "rock";
    if (num < 66) return "paper";
    return "scissors";
}

function getHumanChoice() {
    let input = prompt("rock, paper, or scissors? ");
    return input.toLowerCase();
}

function playGame() {
    for (let i = 0; i < 5; i++){
        playRound();
        console.log(`The score is Computer: ${computerScore} - Human: ${humanScore}`);
    }
}

function playRound(computerChoice = getComputerChoice(),humanChoice = getHumanChoice()){
    console.log(computerChoice);
    console.log(humanChoice);
    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++;
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "paper" && humanChoice === "scissors")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore++;
    }
    else {
        console.log('It\'s a tie!');
    }
}

playGame();