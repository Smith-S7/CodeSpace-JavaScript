function rock(){

const compChoice = ["rock", "paper", "scissors"];
const randomString = compChoice[Math.floor(Math.random(1) * 3)];
console.log(randomString);


if (randomString == "rock")
        alert("That was a draw. You both selected " + randomString);
    else if (randomString == "paper")
        alert("You loose! The computer chose " + randomString);
    else
        alert("You win! The computer chose " + randomString);

}
   
function paper(){

const compChoice = ["rock", "paper", "scissors"];
const randomString = compChoice[Math.floor(Math.random(1) * 3)];
console.log(randomString);


if (randomString == "paper")
        document.getElementById(text).innerHTML("That was a draw. You both selected " + randomString);
    else if (randomString == "scissors")
        alert("You loose! The computer chose " + randomString);
    else
        alert("You win! The computer chose " + randomString);
        
}

function scissors(){

const compChoice = ["rock", "paper", "scissors"];
const randomString = compChoice[Math.floor(Math.random(1) * 3)];
console.log(randomString);


if (randomString == "scissors")
        alert("That was a draw. You both selected " + randomString);
    else if (randomString == "rock")
        alert("You loose. The computer chose " + randomString);
    else
        alert("You win! The computer chose " + randomString);

}