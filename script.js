// VARS AND CONST

let playerScore = 0;
let computerScore = 0;

const rockB = document.querySelector("#rockB");
const paperB = document.querySelector("#paperB");
const scissorsB = document.querySelector("#scissorsB");

const roundR = document.querySelector("#roundR");

const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");

// EVENT LISTENERS

rockB.addEventListener("click", () => {
    let roundResult = playRound("rock", computerPlay());
    scoreUpdate(roundResult);
    
});

paperB.addEventListener("click", () => {
    let roundResult = playRound("paper", computerPlay());
    scoreUpdate(roundResult);
    
});

scissorsB.addEventListener("click", () => {
    let roundResult = playRound("scissors", computerPlay());
    scoreUpdate(roundResult);
});


// FUNCS


function computerPlay(){
    let choose = Math.floor(Math.random() * 3);

    switch (choose){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


function playRound(player, computer){
    if (player == "rock"){
        if (computer == "Paper"){
            return "Computer wins!"

        }
        else if (computer == "Scissors"){
            return "Player wins!"
        }
        else return "Tie!"
    }

    if (player == "paper"){
        if (computer == "Paper"){
            return "Tie!"
        }
        else if (computer == "Scissors"){
            return "Computer wins!"
        }
        else return "Player wins!"
    }

    if (player = "scissors"){
        if (computer == "Paper"){
            return "Player wins!"
        }
        else if (computer == "Scissors"){
            return "Tie!"
        }
        else return "Computer wins!"
    }


}

function scoreUpdate(round){
    if (round == "Player wins!") playerScore++;
    if (round == "Computer wins!") computerScore++;

    roundR.textContent = round;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    whoWins();
}

function whoWins(){
    if (playerScore == 5){
        alert("Player wins game!");
    }

    if (computerScore == 5){
        alert("Computer wins game!");
    }
}

