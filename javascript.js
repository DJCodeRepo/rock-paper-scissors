let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * (99));
    if (num < 33) return "rock";
    if (num < 66) return "paper";
    return "scissors";
}

function playRound(e){
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    let scores = document.createElement("p");
    let roundResult = document.createElement("p");
    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")) {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "paper" && humanChoice === "scissors")) {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else {
        roundResult.textContent = `It\'s a tie! Both chose ${humanChoice}.`;
    }
    scores.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    scoreboard.replaceChildren(scores, roundResult);
    let winMessage = document.createElement("p");
    if (computerScore == 5){
        winMessage.textContent = `The computer wins! Better luck next time.`;
        computerScore = 0;
        humanScore = 0;
        scoreboard.appendChild(winMessage);
    }
    else if (humanScore == 5){
        winMessage.textContent = `Congratulations! You've won this game!`;
        computerScore = 0;
        humanScore = 0;
        scoreboard.appendChild(winMessage);
    }
}

const buttonContainer = document.querySelector(".userChoiceDiv");
const playerScoreboard = document.querySelector(".playerScore");
const computerScoreboard = document.querySelector(".computerScore");
const scoreboard = document.querySelector(".scoreboard");


buttonContainer.addEventListener("click", playRound);