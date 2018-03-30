var wordBank = ["blocks", "creative", "world", "mobile", "craft"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];


var word ;              // Selected word
var guess ;             // Guess
var guesses = [ ];      // Stored geusses
var lives = 6;             // Lives
var counter ;           // Count correct geusses
var numSpaces;          // Number of spaces in word '-'


var showLives = document.getElementById("lives");



var numSpaces = [];
for (var i = 0; i < word.length; i++) {
 numSpaces[i] = "_"
}
document.getElementById("wordContainer").innerHTML = numSpaces.join(" ");


comments = function () {
    remaindGuesses.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
















