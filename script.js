let roundMessage;

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
    alert(`Player chose ${playerSelection}`);
    if (playerSelection === computerSelection) {
        return roundMessage = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return roundMessage = `You lose! ${playerSelection} loses to ${computerSelection}`;
    } else {
        return roundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

const playerSelection = getInput();
const computerSelection = checkCase(computerPlay());

playRound(playerSelection, computerSelection);
alert(`${roundMessage}`);

