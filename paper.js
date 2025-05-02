//let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getHumanChoice (buttons){
    
    


    
return humanChoice;
};

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
};





function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if( humanChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log("You win! rock beats Scissors");
            humanScore++;
        }else if (computerChoice === "paper") {
            console.log("You lose! rock loses to paper.");
            computerScore++;
        }else if ( computerChoice === "rock"){
            console.log("You have Tied, No one gets a piont");
        }       
    }else if (humanChoice === "paper") {
        if(computerChoice === "rock"){
            console.log("You win! paper beats rock");
            humanScore++;
        }else if(computerChoice === "scissors") {
            console.log("You lose! paper loses to scissors");
            computerScore++;
        }else if ( computerChoice === "paper"){
            console.log("You have Tied, No one gets a piont");
        }     
    } else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("You win! scissors beats paper.");
            humanScore++;
        }else if(computerChoice === "rock"){
            console.log("You lose scissorsloses to rock!");
            computerScore++;
        }
        else if ( computerChoice === "scissors"){
            console.log("You have Tied, No one gets a piont");
        }     
    }
}

const buttons = document.querySelectorAll("button");

let humanChoice = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id; 
        playRound(humanChoice,getComputerChoice());      
   });
});



function playGame(){
   
}

//playGame();