const card = document.querySelector('#card')
const play = document.getElementById('play');
const winner = document.getElementById('winner');
const reset = document.getElementById('reset');
const hands = card.querySelectorAll('div.hand-btn > button');
const stats = document.getElementById('status');
const score = document.getElementById('score');
const output = document.getElementById('output');

stats.textContent = 'Rock Paper Scissors 5 Rounds';
output.textContent = 'Click Play to start!!!';
play.addEventListener('click', gameStart);
winner.addEventListener('click', game);

let handChosen = false;
hands.forEach(button => {
    button.addEventListener('click', selectHand);
});

let playerSelection;
let roundMessage;
let playerScore = 0;
let computerScore = 0;


function gameStart() {
    play.disabled = true;
    play.classList.add('disabled');
    winner.disabled = false;
    winner.classList.remove('disabled');
    hands.forEach(button => {
        button.classList.remove('disabled');
    });
    stats.textContent = 'After choosing a hand, click Winner'
    output.textContent = 'Choose your hand in the above buttons, then press winner.';
}
function gameEnd() {
    winner.disabled = true;
    winner.classList.add('disabled');
    reset.disabled = false;
    reset.classList.remove('disabled');
    hands.forEach(button => {
        button.classList.add('disabled');
    });
    stats.textContent = 'We have a winner!'
    output.textContent = determineWinner();
}

function computerPlay() {
    let handGenerator = Math.floor(Math.random() * 3) + 1;

    if (handGenerator === 1) return computerHand = "Rock";
    else if (handGenerator === 2) return computerHand = "Paper";
    else if (handGenerator === 3) return computerHand = "Scissors";
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return roundMessage = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        computerScore += 1;
        return roundMessage = `You lose! Your ${playerSelection} loses to Computer's ${computerSelection}`;
    } else {
        playerScore += 1;
        return roundMessage = `You win! Your ${playerSelection} beats Computer's ${computerSelection}`;
    }
}

function showScore() {
    const scoreboard = `Player: [${playerScore}] - [${computerScore}] :Computer`;
    score.textContent = scoreboard;
}

function selectHand(e) {
    handChosen = true;
    playerSelection = e.target.value;
}

function game() {
    if (handChosen) {
        output.textContent = 'Choose your hand in the above buttons!!!';

        const computerSelection = computerPlay().toLowerCase();
        stats.textContent = `Player: ${playerSelection} vs. Computer: ${computerSelection}`;

        playRound(playerSelection, computerSelection);
        showScore();
        output.textContent = roundMessage;
    }

    if (playerScore === 5 || computerScore === 5) {
        gameEnd();
    }
}

function determineWinner() {
    if (playerScore > computerScore) {
        return `The player won, The computer lost!\nHumanity triumphs once again!`;
    } else if (playerScore < computerScore) {
        return `The computer won, The player lost!\nThe rise of the machines!`;
    } else {
        return `Nobody won!, a draw for the player and computer!`;
    }
}