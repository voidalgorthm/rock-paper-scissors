const card = document.querySelector('#card')
const play = document.getElementById('play');
const next = document.getElementById('next');
const reset = document.getElementById('reset');
const hands = card.querySelectorAll('div.hand-btn > button');
const stats = document.getElementById('status');
const score = document.getElementById('score');
const output = document.getElementById('output');

stats.textContent = 'Rock Paper Scissors 5 Rounds';
output.textContent = 'Click Play to start!!!';
play.addEventListener('click', gameStart);
next.addEventListener('click', game);

let handChosen = false;
hands.forEach(button => {
    button.addEventListener('click', selectHand);
});

let playerSelection;
let roundMessage;
let playerScore = 0;
let computerScore = 0;


function gameStart(e) {
    
    
    play.disabled = true;
    next.disabled = false;
    next.classList.remove('disabled');
    play.classList.add('disabled');
    hands.forEach(button => {
        button.classList.remove('disabled');
    });
    output.textContent = 'Choose your hand in the above buttons!!!';
}

function computerPlay() {
    let computerHand;
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
        console.log(computerScore);
        return roundMessage = `You lose! ${playerSelection} loses to ${computerSelection}`;
    } else {
        playerScore += 1;
        console.log(playerScore);
        return roundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
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

function game(e) {
    if (handChosen) {
        output.textContent = 'Choose your hand in the above buttons!!!';

        const computerSelection = computerPlay().toLowerCase();
        stats.textContent = `Player: ${playerSelection} vs. Computer: ${computerSelection}`;

        playRound(playerSelection, computerSelection);
        showScore();
        output.textContent = roundMessage;
    }
}

function determineWinner(e) {
    if (playerScore > computerScore) {
        console.log(`The player won, The computer lost!\nHumanity triumphs once again!`);
    } else if (playerScore < computerScore) {
        console.log(`The computer won, The player lost!\nThe rise of the machines!`);
    } else {
        console.log(`Nobody won!, a draw for the player and computer!`);
    }
}