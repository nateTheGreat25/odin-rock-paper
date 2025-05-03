//let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

const parentDiv = document.querySelector("#container");


//const para = document.createElement("p")

function removeTheElement (selector) {
    const elementsToRemove = document.querySelectorAll(selector)
    
    if (elementsToRemove.length > 0) {
        elementsToRemove.forEach(element => {
            element.remove();
        });
        console.log("elements removed");

        
    }else {
        console.log("No element to remove found");
        console.log(selector);
    }
  }

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



let rounds = []; // keeps the text fro each round in one element
let i = 0; //counter for eactime function runs


function playRound (humanChoice, computerChoice) {
   
    humanChoice = humanChoice.toLowerCase();
    if( humanChoice === "rock") {
        if(computerChoice === "scissors") {
            rounds [i] = "You win! rock beats Scissors";
            //console.log("You win! rock beats Scissors");
            humanScore++;
        }else if (computerChoice === "paper") {
            rounds [i] = "You lose! rock loses to paper.";
            //console.log("You lose! rock loses to paper.");
            computerScore++;
        }else if ( computerChoice === "rock"){
            rounds [i] = "You have Tied, No one gets a piont";
           // console.log("You have Tied, No one gets a piont");
        }       
    }else if (humanChoice === "paper") {
        if(computerChoice === "rock"){
            rounds [i] = "You win! paper beats rock";
            //console.log("You win! paper beats rock");
            humanScore++;
        }else if(computerChoice === "scissors") {
            rounds [i] = "You lose! paper loses to scissors";
            //console.log("You lose! paper loses to scissors");
            computerScore++;
        }else if ( computerChoice === "paper"){
            rounds [i] = "You have Tied, No one gets a piont";
            //console.log("You have Tied, No one gets a piont");
        }     
    } else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            rounds [i] = "You win! scissors beats paper.";
            //console.log("You win! scissors beats paper.");
            humanScore++;
        }else if(computerChoice === "rock"){
            rounds [i] = "You lose scissors loses to rock!";
            //console.log("You lose scissorsloses to rock!");
            computerScore++;
        }
        else if ( computerChoice === "scissors"){
            rounds [i] = "You have Tied, No one gets a piont";
           // console.log("You have Tied, No one gets a piont");
        }     
    }
    i++;
    
    
    removeTheElement("#roundScore");
   
    rounds.forEach(round => {
        
        const div = document.createElement("div"); // creates div to put everything in
        div.setAttribute("id", "roundScore");
        div.textContent = round;
       
        parentDiv.appendChild(div);

        

    });
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