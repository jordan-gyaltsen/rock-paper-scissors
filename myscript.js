
function getComputerChoice(){
  let odds =  Math.floor(Math.random() * 3)
  if (odds === 0)
    return "rock";
  else if (odds === 1) 
    return "paper";
  else return "scissors";
}


function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice){
    //round.textContent = "You tied! " + humanChoice + " ties with " + computerChoice + "\n";
    round.innerHTML = `Tie! ${humanChoice} ties with ${computerChoice}`;
    //score.textContent += "Human: " + humanScore + "  Computer: " + computerScore + '\n';
    score.innerHTML += `Human: ${humanScore} | Computer: ${computerScore} <br>`;
    return;
  }

  point = outCome(humanChoice, computerChoice);
  if (point == 1) {
    humanScore++;
    // console.log("You win! " + humanChoice + " beats " + computerChoice);
    round.innerHTML =  `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    round.innerHTML =  `You lose! ${computerChoice} beats ${humanChoice}`;
    // console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }
  score.innerHTML += `Human: ${humanScore} | Computer: ${computerScore} <br>`;
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
let roundCount = 0;

let userChoice = document.querySelector('.buttons');
let game = document.querySelector('#game');
let round = document.querySelector('#round');
let score = document.querySelector('#score');
let winner;

userChoice.addEventListener('click', (event) => {
  if (roundCount == 5) {
    let winner = chooseWinner();
    game.innerHTML = `The game is over after 5 rounds. The winner was ${winner}`;
    score.innerHTML = '';
    round.innerHTML = '';
    roundCount = 0;
    humanScore = 0;
    computerScore = 0;
  } else {
  game.innerHTML = '';
  let computer = getComputerChoice();
  //let target = event.target;
  playRound(event.target.id, computer);
  roundCount++;
  console.log(roundCount);
  }
});  

function chooseWinner() {
  if (humanScore > computerScore) return 'human.';
  if (computerScore > humanScore) return 'computer.';
  else return 'nobody, it was a tie!';
}

// console.log("Final score was Human: " + humanScore + " Computer: " + computerScore);
  // switch (target.id) {
  //   case 'rock':
  //     playRound('rock', computer);
  //     console.log("user's choice was " + human + "! Computer's choice was " + computer + "!");
  //     break;
  // }
