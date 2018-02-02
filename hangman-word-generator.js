// Prototype a single word object from any list of words.
function Word(wordList) {
  this.random = wordList[Math.floor(Math.random() * wordList.length)];
  this.word = this.random.word;
  this.definition = this.random.definition;
  // this.showWord = console.log("Word:", this.word);
  // this.showDefinition = console.log("Meaning:", this.definition);
}

// Split the word into an array of its letters.
Word.prototype.letterize = function() {
  randomLetters = this.word.split("");
};

// Hide the letters for gameplay.
Word.prototype.blankify = function(alphabet) {
  // Default Standard English alphabet if none is provided.
  alphabet = alphabet || "abcdefghijklmnopqrstuvwxyz".split("");

  // If an item matches an item in alphabet array, add '_' to randomBlanks. Otherwise if the character is a " ", add " " to randomBlanks.
  randomBlanks = [];
  for (let i = 0; i < randomLetters.length; i++) {
    if (alphabet.indexOf(randomLetters[i]) !== -1) {
      randomBlanks.push("_");
    } else {
      randomBlanks.push(" ");
    }
  }
  console.log(randomBlanks);
};

// Export Word prototype.
module.exports = Word;
