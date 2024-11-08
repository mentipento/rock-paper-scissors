

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else if (randomNumber === 3) {
        return "Scissors";
    } else return getComputerChoice(); // never forget return otherwise undifined
}
    
let computerChoice = getComputerChoice();

function getHumanChoice() {

    let choice = prompt("Please enter 'R' for Rock, 'P' for Paper or 'S' for Scissors", "").toUpperCase()
    if (choice === "R" || choice === "P" || choice === "S") {
        return choice;
    } else 
        alert("Invalid Input! Please enter 'R', 'P' or 'S'");
    return getHumanChoice();
}

let humanChoice = getHumanChoice();

function playGame() {

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "P") {
        humanScore = humanScore + 1;
        return console.log("You win! Paper beats Rock.");
    } else if (computerChoice === "Paper" && humanChoice === "S") {
        humanScore = humanScore + 1;
        return console.log("You win! Scissors beat Paper.");
    } else if (computerChoice === "Scissors" && humanChoice === "R") {
        humanScore = humanScore + 1;
        return console.log("You win! Rock beat Scissors.");
    } else if (computerChoice === "Rock" && humanChoice === "S") {
        computerScore = computerScore + 1;
        return console.log("You lose! Rock beats Scissors.");
    } else if (computerChoice === "Paper" && humanChoice === "R") {
        computerScore = computerScore + 1;
        return console.log("You lose! Paper beats Rock.");
    } else if (computerChoice === "Scissors" && humanChoice === "P") {
        computerScore = computerScore + 1;        return console.log("You lose! Scissors beat Papers.");
    } else {
        return console.log(`It's a draw! You both chose ${computerChoice}.`);
    }
}

playRound(computerChoice, humanChoice);

console.log(`YOU: ${humanScore} COM: ${computerScore}`);

}

playGame()