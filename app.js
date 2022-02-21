let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const winner_p = document.querySelector(".winner > p");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice () {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber = (Math.floor(Math.random() * choices.length));
    return choices[randomNumber];
}

function movePlayed (move) {
    if (move === "r") return "Rock";
    if (move === "p") return "Paper";
    if (move === "s") return "Scissors";
    if (move === "l") return "Lizard";
    if (move === "k") return "Spock";
}

function userWin (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userChoice==="r" && computerChoice==="s") {
        result_p.innerHTML = "Rock crushes Scissors";
    }
    if (userChoice==="r" && computerChoice==="l") {
        result_p.innerHTML = "Rock crushes Lizard";
    }
    if (userChoice==="s" && computerChoice==="p") {
        result_p.innerHTML = "Scissors cuts Paper";
    }
    if (userChoice==="s" && computerChoice==="l") {
        result_p.innerHTML = "Scissors decapitates Lizard";
    }
    if (userChoice==="k" && computerChoice==="s") {
        result_p.innerHTML = "Spock smashes Scissors";
    }
    if (userChoice==="k" && computerChoice==="r") {
        result_p.innerHTML = "Spock vaporizes Rock";
    }
    if (userChoice==="l" && computerChoice==="k") {
        result_p.innerHTML = "Lizard poisons Spock";
    }
    if (userChoice==="l" && computerChoice==="p") {
        result_p.innerHTML = "Lizard eats Paper";
    }
    if (userChoice==="p" && computerChoice==="r") {
        result_p.innerHTML = "Paper covers Rock";
    }
    if (userChoice==="p" && computerChoice==="k") {
        result_p.innerHTML = "Paper disproves Spock";
    }
    winner_p.innerHTML = "You win!";
}
function computerWin (userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userChoice==="s" && computerChoice==="r") {
        result_p.innerHTML = "Rock crushes Scissors";
    }
    if (userChoice==="l" && computerChoice==="r") {
        result_p.innerHTML = "Rock crushes Lizard";
    }
    if (userChoice==="p" && computerChoice==="s") {
        result_p.innerHTML = "Scissors cuts Paper";
    }
    if (userChoice==="l" && computerChoice==="s") {
        result_p.innerHTML = "Scissors decapitates Lizard";
    }
    if (userChoice==="s" && computerChoice==="k") {
        result_p.innerHTML = "Spock smashes Scissors";
    }
    if (userChoice==="r" && computerChoice==="k") {
        result_p.innerHTML = "Spock vaporizes Rock";
    }
    if (userChoice==="k" && computerChoice==="l") {
        result_p.innerHTML = "Lizard poisons Spock";
    }
    if (userChoice==="p" && computerChoice==="l") {
        result_p.innerHTML = "Lizard eats Paper";
    }
    if (userChoice==="r" && computerChoice==="p") {
        result_p.innerHTML = "Paper covers Rock";
    }
    if (userChoice==="k" && computerChoice==="p") {
        result_p.innerHTML = "Paper disproves Spock";
    }
    winner_p.innerHTML = "Computer wins!";
}
function draw (userChoice, computerChoice) {
    result_p.innerHTML = "Draw"
    winner_p.innerHTML = "Nobody wins!";
}

function game (userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs": //rock crushes scissors 
        case "rl": //rock crushes lizard
        case "sp": //scissors cuts paper
        case "sl": //scissors decapitates lizard
        case "ks": //spock smashes scissors
        case "kr": //spock vaporizes rock
        case "lk": //lizard poisons spock
        case "lp": //lizard eats paper
        case "pr": //paper covers rock
        case "pk": //paper disproves spock
            userWin(userChoice, computerChoice);
            break;

        case "sr": //rock crushes scissors 
        case "lr": //rock crushes lizard
        case "ps": //scissors cuts paper
        case "lp": //paper decapitates lizard
        case "lk": //spock smashes lizard
        case "rk": //spock vaporizes rock
        case "kl": //lizard poisons spock
        case "pl": //lizard eats paper
        case "rp": //paper covers rock
        case "kp": //paper disproves spock
            computerWin(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main () {
    rock_div.addEventListener (
        'click', function () {
            game ("r");
        }
    )
    paper_div.addEventListener (
        'click', function () {
            game ("p");
        }
    )
    scissors_div.addEventListener (
        'click', function () {
            game ("s");
        }
    )
    lizard_div.addEventListener (
        'click', function () {
            game ("l");
        }
    )
    spock_div.addEventListener (
        'click', function () {
            game ("k");
        }
    )
}

main();