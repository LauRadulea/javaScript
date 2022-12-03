let scorePlayer = 0;
let scoreComputer = 0;
const choices = ["rock", "paper", "scissors"];

function game() {
  for(let i=0; i<5; i++) {
    let playerSelection = prompt("Do you choose rock, paper or scissor?");
    while (!choices.includes(playerSelection.toLowerCase())) {
      playerSelection = prompt("Try again please! Do you choose rock, paper or scissors?");
    }
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(`${playerSelection} VS ${computerSelection} `);
    playRound(playerSelection, computerSelection);
    }
  if(scoreComputer == scorePlayer) {
    console.log(`It's a draw! The score is: ${scoreComputer}:${scorePlayer}`);
  } else if (scoreComputer > scorePlayer) {
    console.log(`Computer is the winner! The score is: ${scoreComputer}:${scorePlayer}`);
  } else {
    console.log(`You are the winner! The score is: ${scorePlayer}:${scoreComputer}`);
  }
}

function computerPlay () {
    return choices [Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
      console.log("DRAW");
    } else if (playerSelection === "rock" && computerSelection === "scissor" 
            || playerSelection === "paper" && computerSelection === "rock" 
            || playerSelection === "scissor" && computerSelection === "paper") {
      console.log("Player won the round");
      scorePlayer++;
    } else {
      console.log("Computer won the round");
      scoreComputer++;
    }
}

game();