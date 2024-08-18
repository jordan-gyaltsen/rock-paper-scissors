
function getComputerChoice(){
  let odds =  Math.floor(Math.random() * 3)
  if (odds === 0)
    return "rock";
  else if (odds === 1) 
    return "paper";
  else return "scissors";
}

function getHumanChoice(){
  let choice = prompt("Choose rock, paper, or scissors");
  return choice;
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice){
    console.log("You tied! " + humanChoice + " ties with " + computerChoice);
    console.log("Human: " + humanScore + "  Computer: " + computerScore);
    return;
  }

  point = outCome(humanChoice, computerChoice);
  if (point == 1) {
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice);
  } else {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }
  console.log("Human: " + humanScore + "|  Computer: " + computerScore);
}

function outCome(humanChoice, computerChoice){
  if (computerChoice == humanChoice) {
    return 0;
  }
  switch (humanChoice) {
    case "rock":
      if (computerChoice == "scissors") return 1; 
      else return -1;
      break;
    case "paper":
      if (computerChoice == "rock") return 1;
      else return -1;
    case "scissors":
      if (computerChoice == "paper") return 1;
      else return -1;
  }
}


let humanScore = 0;
let computerScore = 0;
function playGame(){
  for (let i = 0; i < 5; i++){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log("user's choice was " + human + "! Computer's choice was " + computer + "!");
    playRound(human, computer);
  }
  console.log("Final score was Human: " + humanScore + " Computer: " + computerScore);
}
