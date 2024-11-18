function playGame() {

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {

// function getComputerChoice() {

//     let randomNumber = Math.floor(Math.random() * 3);

//     if (randomNumber === 0) {
//         return "Rock";
//     } else if (randomNumber === 1) {
//         return "Paper";
//     } else if (randomNumber === 2) {
//         return "Scissors";
//     } 
// }

function getComputerChoice() {

    const array = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    return array[randomNumber];

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

console.log(`The final result is YOU: ${humanScore} COM: ${computerScore}`)

if (humanScore > computerScore) {
    console.log(`Congratulations! You won.`);
} else if (humanScore < computerScore) {
    console.log(`You lost! You brought shame on you and your family.`);
} else {
    console.log(`It's a draw! How boring...`);
}

}

playGame();