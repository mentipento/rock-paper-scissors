function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const totalRounds = 5;

    function getComputerChoice() {
        const array = ["Rock", "Paper", "Scissors"];
        let randomIndex = Math.floor(Math.random() * 3);
        return array[randomIndex];
    }

    document.querySelector("#rock").addEventListener("click", () => playRound(getComputerChoice(), "R"));
    document.querySelector("#paper").addEventListener("click", () => playRound(getComputerChoice(), "P"));
    document.querySelector("#scissors").addEventListener("click", () => playRound(getComputerChoice(), "S"));

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "Rock" && humanChoice === "P") {
            humanScore++;
            document.querySelector("#winner").textContent = "You win! Paper beats Rock.";
        } else if (computerChoice === "Paper" && humanChoice === "S") {
            humanScore++;
            document.querySelector("#winner").textContent = "You win! Scissors beat Paper.";
        } else if (computerChoice === "Scissors" && humanChoice === "R") {
            humanScore++;
            document.querySelector("#winner").textContent = "You win! Rock beat Scissors.";
        } else if (computerChoice === "Rock" && humanChoice === "S") {
            computerScore++;
            document.querySelector("#winner").textContent = "You lose! Rock beats Scissors.";
        } else if (computerChoice === "Paper" && humanChoice === "R") {
            computerScore++;
            document.querySelector("#winner").textContent = "You lose! Paper beats Rock.";
        } else if (computerChoice === "Scissors" && humanChoice === "P") {
            computerScore++;
            document.querySelector("#winner").textContent = "You lose! Scissors beat Paper.";
        } else {
            document.querySelector("#winner").textContent = `It's a draw! You both chose ${computerChoice}.`;
        }

        document.querySelector("#score").textContent = `YOU: ${humanScore} COM: ${computerScore}`;
        roundsPlayed++;

        if (roundsPlayed === totalRounds) {
            gameEnds();
        }
    }

    function gameEnds() {
        document.querySelector("#score").textContent = `The final result is YOU: ${humanScore} COM: ${computerScore}`;

        if (humanScore > computerScore) {
            document.querySelector("#statement").textContent = `Congratulations! You won.`;
        } else if (humanScore < computerScore) {
            document.querySelector("#statement").textContent = `You lost! You brought shame on you and your family.`;
        } else {
            document.querySelector("#statement").textContent = `It's a draw! How boring...`;
        }

        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
    }
}

playGame();