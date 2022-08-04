console.log("Hello world")

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

//yeah
//double yeah

function playerPlay(){
    let choose = prompt("Choose your weapon", "rock");
    choose = choose.toLowerCase();
    return choose;
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


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let round = playRound(playerPlay(), computerPlay())

        if (round == "Player wins!") playerScore++;
        if (round == "Computer wins!") computerScore++;
    }

    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (computerScore == playerScore) console.log("Tie game!")
    else if (computerScore > playerScore) console.log("Computer wins game!")
    else console.log("Player wins game!")
}

game()