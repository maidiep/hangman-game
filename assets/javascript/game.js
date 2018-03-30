var wordBank = ["blocks", "creative", "world", "mobile", "craft"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var remainingLetters = word.length
console.log(word)

var guess;             // Guess
var guesses = [];      // Stored geusses
var wordArr = [];      //random word array
var lives = 6;          // Lives
var numSpaces = [];     // Number of spaces in word '-'


var showLives = document.getElementById("lives");

for (var i = 0; i < word.length; i++) {
  wordArr.push(word[i]);
}


for (var i = 0; i < word.length; i++) {
  numSpaces[i] = "_"
}
document.getElementById("wordContainer").innerHTML = numSpaces.join(" ");

document.onkeyup = function (event) {
if (lives > 0){
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess)
  if (wordArr.indexOf(userGuess) < 0) {
    guesses.push(userGuess);
    lives--;
    comments();
  } else {
    console.log(wordArr.indexOf(userGuess))
    var guessIndex = wordArr.indexOf(userGuess);
    numSpaces[guessIndex] = userGuess;
    document.getElementById("wordContainer").innerHTML = numSpaces.join(" ");
    comments();
  }
}
}


comments = function () {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
 if (numSpaces.indexOf("_") < 0) {
      showLives.innerHTML = "You Win!";
  }
}
comments()














