let roundMessage;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerHand;
    let handGenerator = Math.floor(Math.random() * 3) + 1;

    if (handGenerator === 1) return computerHand = "Rock";
    else if (handGenerator === 2) return computerHand = "Paper";
    else if (handGenerator === 3) return computerHand = "Scissors";
}

function checkCase(hand) { return hand.toLowerCase(); };

function getInput() {
    while (true) {
        const playerHand = prompt("Hand?", "").toLowerCase();

        if (playerHand === 'rock' || playerHand === 'paper' || playerHand === 'scissors') {
            return playerHand;
        } else if (playerHand === null || playerHand === NaN)
            alert("Impossible! Try again!");
        else {
            alert("Invalid hand! Try again!");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return roundMessage = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        computerScore += 1;
        return roundMessage = `You lose! ${playerSelection} loses to ${computerSelection}`;
    } else {
        playerScore += 1;
        return roundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        const scoreboard = `Player: [${playerScore}] - [${computerScore}] :Computer`;
        alert(`Round ${i}:\n${scoreboard}`);

        const playerSelection = getInput();
        const computerSelection = checkCase(computerPlay());
        alert(`Player chose ${playerSelection}`);
        playRound(playerSelection, computerSelection);
        alert(`${roundMessage}`);
    }
    
    if(playerScore > computerScore){
        alert(`The player won, The computer lost!\nHumanity triumphs once again!`);
    } else if(playerScore < computerScore) {
        alert(`The computer won, The player lost!\nThe rise of the machines!`);
    } else {
        alert(`Nobody won!, a draw for the player and computer!`);
    }
}
alert("Rock Paper Scissors");
game();