function getComputerChoice (){
    let compInt = Math.round(Math.floor(Math.random() * 3));
    let compChoice;

   switch (compInt){
    case 0:
         compChoice = "rock";
         break;
    case 1:
        compChoice = "scissors";
        break;
    case 2:
        compChoice = "paper";
        break;
   };
    return compChoice;
}

function getHumanChoice () {
    let humanChoice = prompt("rock,paper or scissors");
    return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if( humanChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log("You win! rock beats Scissors");
            humanScore++;
        }else if (computerChoice === "paper") {
            console.log("You lose! rock loses to paper.");
            computerScore++;
        }        
    }else if (humanChoice === "paper") {
        if(computerChoice === "rock"){
            console.log("You win! paper beats rock");
            humanScore++;
        }else if(computerChoice === "scissors") {
            console.log("You lose! paper loses to scissora")
        }
    } else if{
        
    }
    else (humanChoice === computerChoice) {
        console.log("You have Tied, No one gets a piont") 
        
    }
}

playRound(getHumanChoice(), getComputerChoice());