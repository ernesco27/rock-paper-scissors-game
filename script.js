//to begin with, i'm creating a function to get computer choice
//this will be either Rock, Paper, or Scissors

let userScore = 0;
let cpuScore = 0;
const userScores_span = document.getElementById('user-score');
const cpuScores_span = document.getElementById('cpu-score');
const scoreBoard = document.querySelector('.score-container');
const result_div = document.querySelector('.results');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');
const overlay_div = document.getElementById('overlayId');
const endGameModal = document.getElementById('end-game');
const endGameHeader = document.getElementById('headDec');
const endGamePara = document.getElementById('headPara');
const restartBtn = document.getElementById('restart');
const copyright = document.getElementById('copy');




 function getComputerChoice(){
     let choice = ["Rock" , "Paper", "Scissors"];
     let randomIndex = Math.floor(Math.random() * choice.length);
     return(choice[randomIndex]);

 }



function main(){
        rock_div.addEventListener('click', () => {
        game('Rock');
    })

        paper_div.addEventListener('click', () => {
        game('Paper');
    })

        scissors_div.addEventListener('click', () => {
        game('Scissors');
    })
}

main();

function win(userChoice,computerChoice){
    userScore++;
    cpuScore;
    userScores_span.textContent = userScore;
    cpuScores_span.textContent = cpuScore;
    result_div.style.color = 'green'
    result_div.textContent = `${userChoice} beats ${computerChoice} .YOU WIN! 🔥🔥`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 500);

     if(isGameOver()){
        overlay();
        endGame();
        finalMessage();
    }

}



function lost(userChoice,computerChoice){
    cpuScore++;
    userScore;
    cpuScores_span.textContent = cpuScore;
    result_div.style.color = 'red'
    result_div.textContent = `${computerChoice} beats ${userChoice}.YOU LOST ☹️!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 500);

    if(isGameOver()){
        overlay();
        endGame();
        finalMessage();
    }

}

function draw(userChoice,computerChoice){
    result_div.style.color = 'white'
    result_div.textContent = `${userChoice} matches ${computerChoice}. I'TS A DRAWWW!!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 500);

    
}



function isGameOver(){
    return userScore === 5 || cpuScore === 5;
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice,computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lost(userChoice,computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice,computerChoice);
            break;
    }

}

function overlay(){
    overlay_div.classList.add('overlay');
}

function endGame(){
    endGameModal.classList.add('end-game');
    }

function finalMessage(){
        if(userScore === 5){
            endGameHeader.textContent = "YOU WON! ❤️‍🔥"
            endGamePara.textContent = 'You have the brain of a Super Computer...'
        }else if(cpuScore === 5){
            endGameHeader.textContent = "YOU LOST! 😢"
            endGamePara.textContent = 'Mtcheeew. You disappoint me...'
    }
    return  
}
    

restartBtn.addEventListener('click', () =>{
    overlay_div.classList.remove('overlay');
    endGameModal.classList.remove('end-game');
    userScore = 0;
    cpuScore = 0;
    userScores_span.textContent = userScore;
    cpuScores_span.textContent = cpuScore;
    result_div.textContent = "";

})

function getYear(){
    copyright.textContent += ` Kwabena, ${new Date().getFullYear()} 💖` ;
    return
}

getYear();







/*function main(){
        rock_div.addEventListener('click', () => {
        game('Rock');
    })

        paper_div.addEventListener('click', () => {
        game('Paper');
    })

        scissors_div.addEventListener('click', () => {
        game('Scissors');
    })
}*/

//main();










/*
function getPlayerChoice(){
    const computerSelection = getComputerChoice();
    const roundResults = playRound(playerSelection,computerSelection);
    const imageBtn = document.querySelectorAll('.btn-image');
    imageBtn.forEach((img) =>{
    img.addEventListener('click', () =>{
        let  playerSelection = img.alt;
        return(playerSelection);
        
    })  

    if(roundResults == "Player"){
            console.log(`You Win, ${playerSelection} beats ${computerSelection}`);
            userScore++;
            userScore.textContent = `${userScore}`;
        }else if(roundResults === "Computer"){
            console.log(`You Lose, ${computerSelection} beats ${playerSelection}`);
            cpuScore++;
        }else{
            console.log("It's a tie! Let's go again.")
        }
})
    if(userScore > cpuScore){
        console.log(`You've WON! The Final Score is ${userScore} - ${cpuScore}`);
    }else{
        console.log(`You've LOST! The Final Score is ${userScore} - ${cpuScore}`);
    }
}




function playRound(playerSelection,computerSelection){
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
    let userScore = 0;
    let cpuScore = 0;
        //const playerSelection = main() //getImageValue(); //prompt("Choose between rock, paper or scissors");
        const computerSelection = getComputerChoice();
        const roundResults = playRound(playerSelection,computerSelection);

        if(roundResults == "Player"){
            console.log(`You Win, ${playerSelection} beats ${computerSelection}`);
            userScore++;
            userScore.textContent = `${userScore}`;
        }else if(roundResults === "Computer"){
            console.log(`You Lose, ${computerSelection} beats ${playerSelection}`);
            cpuScore++;
        }else{
            console.log("It's a tie! Let's go again.")
        }
    }

    if(userScore > cpuScore){
        console.log(`You've WON! The Final Score is ${userScore} - ${cpuScore}`);
    }else{
        console.log(`You've LOST! The Final Score is ${userScore} - ${cpuScore}`);
    }

*/
//game();
