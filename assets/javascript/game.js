var name = prompt ("What is your name?");
console.log ( "Hello " + name);

var wordBank = ["blocks", "creative", "world", "mobile", "craft" ];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log (word);

var wordBlanks = [];
for (var i = 0; i < word.length; i++) {
 wordBlanks[i] = "_";
}
var remainingLetters = word.length;
console.log (wordBlanks);

var remainingLetters = word.length;
console.log (remainingLetters);

while (remainingLetters > 0) {
    document.write(wordBlanks.join(" "));
}
var userGuess = prompt("Guess a letter by pressing a letter key or click Cancel to stop playing.");
console.log (userGuess);