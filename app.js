let userScoree = 0;
let compScoree = 0;

const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");

const msg = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

const showWinner = (userWin) => {
    if(userWin){
        userScoree++;
        msg.innerText = "You Win!";
        userScore.innerText = userScoree;
        msg.style.backgroundColor = "green";
    } else {
        compScoree++;
        msg.innerText= "You Lose!, Better luck next time";
        compScore.innerText = compScoree;
        msg.style.backgroundColor="red";

    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again";
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin);
    }
}
 
choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
