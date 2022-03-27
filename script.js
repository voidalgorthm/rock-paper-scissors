const card = document.querySelector('#card')
const play = document.getElementById('play');
const winner = document.getElementById('winner');
const reset = document.getElementById('reset');
const hands = card.querySelectorAll('div.hand-btn > button');
const stats = document.getElementById('status');
const score = document.getElementById('score');
const output = document.getElementById('output');

play.addEventListener('click', gameStart);
winner.addEventListener('click', game);
hands.forEach(button => {
    button.addEventListener('click', selectHand);
});
reset.addEventListener('click', resetGame);

stats.textContent = 'Rock Paper Scissors 5 Rounds';
score.textContent = 'written by: codexeger';
output.textContent = 'Click Play to start!!!';
let handChosen = false;

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
        return roundMessage = `You lost! Your ${playerSelection} loses to Computer's ${computerSelection}`;
    } else {
        playerScore += 1;
        return roundMessage = `You won! Your ${playerSelection} beats Computer's ${computerSelection}`;
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
        return `The player wins, The computer loses!\nHumanity triumphs once again!`;
    } else if (playerScore < computerScore) {
        return `The computer wins, The player loses!\nThe rise of the machines!`;
    } else {
        return `Nobody wins!, a draw for the player and computer!`;
    }
}

function resetGame() {
    stats.textContent = 'Rock Paper Scissors 5 Rounds';
    score.textContent = 'written by: codexeger';
    output.textContent = 'Click Play to play again!';
    handChosen = false;
    playerScore = 0;
    computerScore = 0;
    playerSelection ='';
    play.disabled = false;
    play.classList.remove('disabled');
    reset.disabled = true;
    reset.classList.add('disabled');
}