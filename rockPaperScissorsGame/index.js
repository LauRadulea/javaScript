//computer selection
function computerPlay () {
  let choice = Math.floor(Math.random() * 3 + 1)
  switch (choice) {
   case 1: 
     return "rock";
     break;
   case 2:
     return "paper";
     break;
   case 3: 
     return "scissor";
     break;
    }
 }

//play one round
 function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
      console.log("DRAW");
      return "draw";
    } else if (playerSelection === "rock" && computerSelection === "scissor" 
            || playerSelection === "paper" && computerSelection === "rock" 
            || playerSelection === "scissor" && computerSelection === "paper") {
          console.log("Player won the round");
          return "player";
        } else {
          console.log("Computer won the round");
          return "computer";
      }
 }

 function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for(let i=0; i<5; i++) {
    //Player input/selection
    let playerSelection = prompt("Do you choose rock, paper or scissor?");
    while (!(playerSelection.toLowerCase() === "paper" 
          || playerSelection.toLowerCase() === "rock" 
          || playerSelection.toLowerCase() === "scissor"))
    {
      playerSelection = prompt("Try again please! Do you choose rock, paper or scissors?");
    }
  console.log(`You chose ${playerSelection}`);
  let computerSelection = computerPlay();
  console.log("computer chose " + computerSelection);
  let roundResult = playRound(playerSelection, computerSelection);
  if(roundResult === "player") {
    scorePlayer++;
  } else if (roundResult === "computer") {
    scoreComputer++;
  }
  }
  //determin winner
  if(scoreComputer == scorePlayer) {
    console.log("It's a draw!");
  } else if (scoreComputer > scorePlayer) {
    console.log("Compute is the winner!");
  } else {
    console.log("You are the winner!");
  }
  console.log(`the score is: Computer: ${scoreComputer} You: ${scorePlayer}`);
}

game();