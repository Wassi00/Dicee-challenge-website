// Dice1
var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImg1="images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = randomDiceImg1;


// Dice2
var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImg2="images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = randomDiceImg2;

// Winner
if(randomNumber1>randomNumber2)
  document.querySelector("h1").textContent="🚩 Player 1 won!";
  else if(randomNumber1<randomNumber2)
  document.querySelector("h1").textContent="🚩 Player 2 won!";
  else document.querySelector("h1").textContent="That's a draw!";
