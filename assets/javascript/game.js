var name = prompt ("What is your name?");
confirm ( "Hello " + name + "." + " Let's play Hangman!");

var wordBank = ["blocks", "creative", "world", "mobile", "craft" ];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log (word);

var blank = [];
for (var i = 0; i < word.length; i++) {
 blank[i] = "_";
}

var remainingLetters = word.length;
while (remainingLetters > 0) {
    alert(blank.join(" "));
var guess = prompt ("Guess a letter.");
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    blank[j] = guess;
    remainingLetters--;

 }
}
}

alert(blank.join(" "));
alert("Good work! The word was " + word + ".");