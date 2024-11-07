function getComputerChoice() {

    let randomNumber = Math.floor(Math.random()*10);

    if (randomNumber === 1) {
        return "Rock";
        } else if (randomNumber === 2) {
            return "Paper";
        } else if (randomNumber === 3) {
            return "Scissors";
        } else return getComputerChoice();  // never forget return otherwise undifined
    }
    
    getComputerChoice()


function getHumanChoice() {

    let choice = prompt("Please enter 'R' for Rock, 'P' for Paper or 'S' for Scissors", "")
    if (choice === "R" || choice === "P" || choice =="S") {
        return choice;
    } else 
     alert("Invalid Input! Please enter 'R', 'P' or 'S'");
    return getHumanChoice();
}

getHumanChoice()

let humanScore = 0;
let computerScore = 0;