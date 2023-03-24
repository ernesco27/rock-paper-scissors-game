//to begin with, i'm creating a function to get computer choice
//this will be either Rock, Paper, and Scissors

const computerSelection = getComputerChoice();

//this is a function to get computer choice

 function getComputerChoice(){
     let choice = ["Rock" , "Paper", "Scissors"];
     let randomIndex = Math.floor(Math.random() * choice.length);
     return(choice[randomIndex]);
 }

//this is a function for the game, specifying the conditional statements

function playRound(playerSelection,computerSelection){
    //"Rock" > "Scissors";
    //"Scissors" > "Paper";
    //"Paper" > "Rock";

    if(playerSelection === computerSelection){
        console.log("it's a tie! Let's go again!");
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        console.log(`You Win ${playerSelection} beats ${computerSelection}`);
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log(`You Win ${playerSelection} beats ${computerSelection}`)
    }else{
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`)
    } 
}

playerSelection = prompt("What is your selection?");

playRound(playerSelection,computerSelection)

//to do next; make playerselection case insensitive
