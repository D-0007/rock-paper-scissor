let userScore = 0;
let compScore = 0;

let message = document.querySelector("#msg");
let user_score_message = document.querySelector("#user-score");
let comp_score_message = document.querySelector("#comp-score");

let drawGame = ()=>{
    console.log("The Game was Draw");
    message.innerHTML = "DRAW, play again!";
    message.style.backgroundColor = "#081b31";
    userScore++;
    compScore++;
};

let winnerMsg = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log(`You win! ${userChoice} beats ${compChoice}`);
        message.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
        userScore++;
    } else{
        console.log(`You lose ${compChoice} beats ${userChoice}`);
        message.innerHTML = `You lose ${compChoice} beats Your ${userChoice}`;
        message.style.backgroundColor = "red";
        compScore++;
    }
};

let playGame = (userChoice)=>{
    console.log("Your choice:",userChoice);

    let options = ["rock","paper","scissors"];
    let compChoiceIdx = Math.floor(Math.random() * 3);
    let compChoice = options[compChoiceIdx];

    console.log("Computer choice:",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice==="paper"?false:true;
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice==="rock"?true:false;
        } else{
            // rock, paper
            userWin = compChoice==="rock"?false:true;
        }

        winnerMsg(userWin,userChoice,compChoice);
    }

};

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        console.log("Choice was made", userChoice);

        playGame(userChoice);

        user_score_message.innerHTML = `${userScore}`;
        comp_score_message.innerHTML = `${compScore}`;
    });
});
