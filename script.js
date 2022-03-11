let computerHand;

function computerPlay(){
    let handGenerator = Math.floor(Math.random()*3) + 1;

    if(handGenerator === 1) return computerHand = "Rock";
    else if(handGenerator === 2) return computerHand = "Paper";
    else if(handGenerator === 3) return computerHand = "Scissors";
}

const playerHand = "RoCk";

function caseInsensitive(hand) { return hand.toLowerCase(); };

const playerSelection = caseInsensitive(playerHand);
const computerSelection = caseInsensitive(computerPlay());

console.log(playerSelection);
console.log(computerSelection);