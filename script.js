let roundMessage;

function computerPlay(){
    let computerHand;
    let handGenerator = Math.floor(Math.random()*3) + 1;

    if(handGenerator === 1) return computerHand = "Rock";
    else if(handGenerator === 2) return computerHand = "Paper";
    else if(handGenerator === 3) return computerHand = "Scissors";
}

const playerHand = "RoCk";

function caseInsensitive(hand) { return hand.toLowerCase(); };

const playerSelection = caseInsensitive(playerHand);
const computerSelection = caseInsensitive(computerPlay());

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return roundMessage = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (( playerSelection=='rock' && computerSelection=='paper') 
    || ( playerSelection=='paper' && computerSelection=='scissors')
    || ( playerSelection=='scissors' && computerSelection=='rock')){
        return roundMessage = `You lose! ${playerSelection} loses to ${computerSelection}`;        
    }  else {
        return roundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

alert(`Player chose ${playerSelection}`);
playRound(playerSelection, computerSelection)
alert(`${roundMessage}`);