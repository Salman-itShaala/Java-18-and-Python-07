const userChoicePara = document.getElementById("user-choice-para");
const compouterChoicePara = document.getElementById("comp-choice-para");
const resultPara = document.getElementById("result-para");

function playGame(userChoice) {

    let options = ["rock", "paper", "scissors"];

    const randomNum = Math.floor(Math.random() * 3); // 0,1,2

    let computerChoice = options[randomNum]; // randomNum - 0,1,2

    userChoicePara.innerText = "User Choice: " + userChoice;
    compouterChoicePara.innerText = "Computer Choice: " + computerChoice;

    // who's winning
    if (computerChoice === userChoice) {
        resultPara.innerText = "Result : It's Draw 😊";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        resultPara.innerText = "Result : You won! 😁"
    } else {
        resultPara.innerText = "Result : You lost! 🥲"
    }

}