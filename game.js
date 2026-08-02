const result = document.getElementById("result");
const playbtn = document.getElementById("play");
const Rockbtn = document.getElementById("rock");
const Paperbtn = document.getElementById("paper");
const Scissorbtn = document.getElementById("scissor");
const PcChoices = ["rock", "paper", "scissor"];
let playerscore = 0;
let computerscore = 0;
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * PcChoices.length);
    return PcChoices[randomIndex];
}
playbtn.onclick = function () {
       document.getElementById("gamestate").textContent = "Game Started! Make your choice.";
       Rockbtn.onclick = function () {
           if (getComputerChoice() === "rock") {
                result.textContent = "It's a tie!\n Your score: " + playerscore + "\n Computer score: " + computerscore;
           }
              else if (getComputerChoice() === "paper") {
                result.textContent = "You lose! Paper beats Rock.\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                computerscore++;
              }
                else {
                result.textContent = "You win! Rock beats Scissors.\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                playerscore++;
                }
       }
       Paperbtn.onclick = function () {
              if (getComputerChoice() === "paper") {
                result.textContent = "It's a tie!\n Your score: " + playerscore + "\n Computer score: " + computerscore;
              }
              else if (getComputerChoice() === "scissor"){
                result.textContent = "You lose! Scissors beats Paper.\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                computerscore++;
              }
              else {
                result.textContent = "You win! Paper beats Rock.\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                playerscore++;
              }
        }
         Scissorbtn.onclick = function () {
                if (getComputerChoice() === "scissor") {
                result.textContent = "It's a tie!\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                }
                else if (getComputerChoice() === "rock") {
                    result.textContent = "You lose! Rock beats Scissors.\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                    computerscore++;
                }
                else {
                    result.textContent = "You win! Scissors beats Paper.\n Your score: " + playerscore + "\n Computer score: " + computerscore;
                    playerscore++;
                }
         }
}