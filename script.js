//to begin with, i'm creating a function to get computer choice
//this will be either Rock, Paper, or Scissors

const computerSelection = getComputerChoice();

//this is a function to get computer choice

 function getComputerChoice(){
     let choice = ["Rock" , "Paper", "Scissors"];
     let randomIndex = Math.floor(Math.random() * choice.length);
     return(choice[randomIndex]);
 }


//this is a function for each round of game, specifying the conditional statements

function playRound(playerSelection,computerSelection){
    //"Rock" > "Scissors";
    //"Scissors" > "Paper";
    //"Paper" > "Rock";
    playerSelection = playerSelection.toLowerCase();     //this is to convert user input to lowercase  before comparison

    if(playerSelection == computerSelection){
        return("it's a tie! Let's go again!");
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return("Player");
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return("Player");
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return("Player")
    }else{
        return("Computer")
    } 
}

//this is the game function incorporating the game rounds and player scores.
//while loop was used to break the tie

function game(){
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 5 && computerScore < 5){
        const playerSelection = prompt("Choose between rock, paper or scissors");
        const computerSelection = getComputerChoice();
        const roundResults = playRound(playerSelection,computerSelection);

        if(roundResults == "Player"){
            console.log(`You Win, ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }else if(roundResults === "Computer"){
            console.log(`You Lose, ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }else{
            console.log("It's a tie! Let's go again.")
        }
    }

    if(playerScore > computerScore){
        console.log(`You've WON! The Final Score is ${playerScore} - ${computerScore}`);
    }else{
        console.log(`You've LOST! The Final Score is ${playerScore} - ${computerScore}`);
    }
}

game();
