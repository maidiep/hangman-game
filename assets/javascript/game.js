var wordBank = ["blocks", "creative", "world", "mobile", "craft"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var remainingGuesses = word.length;

var numSpaces = [];
for (var i = 0; i < word.length; i++) {
 numSpaces[i] = "_"
}
document.getElementById("wordContainer").innerHTML = numSpaces.join(" ");

//accpeting user guess

//counter for Remaining Guesses, start at 7 and decrease by 1 after each incorrect guess

//update numSpaces when guess are correct

//message and end game when counter reaches 0



















