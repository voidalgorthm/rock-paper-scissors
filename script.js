let randomHand = 0;

function computerPlay(){
    randomHand = Math.floor(Math.random()*3) + 1;

    if(randomHand === 1) console.log("Rock");
    else if(randomHand === 2) console.log("Paper");
    else if(randomHand === 3) console.log("Scissors");
}

