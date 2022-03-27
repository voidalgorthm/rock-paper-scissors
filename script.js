const container = document.querySelector('container');
const play = document.getElementById('play');
const next = document.getElementById('next');
const reset = document.getElementById('reset');
const buttons = document.getElementsByClassName('button hand disabled');
const output = document.getElementById('output');

play.addEventListener('click', game);
output.textContent = 'Click Play to start!!!';
console.log(buttons);

let roundMessage;
let playerScore = 0;
let computerScore = 0;

function gameStart() {
    play.disabled = true;
    next.disabled = false;
    next.classList.remove('disabled');
    play.classList.add('disabled');
    [...buttons].forEach((button) => {
        button.classList.remove('disabled');
    });
}

function computerPlay() {
    let computerHand;
    let handGenerator = Math.floor(Math.random() * 3) + 1;

    if (handGenerator === 1) return computerHand = "Rock";
    else if (handGenerator === 2) return computerHand = "Paper";
    else if (handGenerator === 3) return computerHand = "Scissors";
}

function checkCase(hand) { return hand.toLowerCase(); };

function selectHand(e) {

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            return playerHand = button.textContent;
        });
    });
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

function game(e) {
    gameStart();
    const scoreboard = `Player: [${playerScore}] - [${computerScore}] :Computer`;
    // const playerSelection = dashboard.addEventListener('click', selectHand());
    console.log('heh');
    // console.log(playerSelection);
    const computerSelection = checkCase(computerPlay());
    // console.log(computerSelection);
    // console.log(`Player chose ${playerSelection}`);
    playRound('rock', computerSelection);
    // output.textContent = roundMessage;

    /* if (playerScore > computerScore) {
        console.log(`The player won, The computer lost!\nHumanity triumphs once again!`);
    } else if (playerScore < computerScore) {
        console.log(`The computer won, The player lost!\nThe rise of the machines!`);
    } else {
        console.log(`Nobody won!, a draw for the player and computer!`);
    } */
}