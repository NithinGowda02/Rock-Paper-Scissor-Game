let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const genCompchoice = () => {
    const option = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
}

const drawGame = () =>{
    msg.innerText= "Game was Draw!, Play again";
    msg.style.backgroundColor=" #6a96c9";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText= `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#00aa00";
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText= `Computer Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#ff0000";
    }
}

const playGame = (userChoice) => {
     const compChoice = genCompchoice();
     
     if (userChoice === compChoice){
        drawGame();
     }
     else {
        let userWin = true;
        if (userChoice === "rock") { 
            userWin = (compChoice === "paper" ? false : true);
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissor" ? false : true);
        }
        else {
            userWin = (compChoice === "rock" ? false : true);
        }
        showWinner(userWin, userChoice, compChoice);
     }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    });