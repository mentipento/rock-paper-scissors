
function restart() {

    if ((Math.floor(Math.random()*10) === 1 || 2 || 3) === true) {
        return "Rock";
        } else if ((Math.floor(Math.random()*10) === 4 || 5 || 6) === true) {
            return "Paper";
        } else if ((Math.floor(Math.random()*10) === 7 || 8 || 9) === true) {
            return "Scissors";
        } else restart();
    }
    
restart()

