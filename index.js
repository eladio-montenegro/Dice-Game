//logic for player 1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // creates a random number 1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //randomNumber1 will generate a # and that number will be places into this string, calling a specific image

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//logic for player 2 dice
var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//logic for the top banner with the winner info
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️ Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏴 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw! Roll Again";
}

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);