// Prototype an object from the user's guess.
function Letter(answer) {
  this.guess = answer.guess.toLowerCase();
}

// Check if the letter is in the alphabet.
Letter.prototype.isValid = function(alphabet) {
  // Default Standard English alphabet if none is provided.
  alphabet = alphabet || "abcdefghijklmnopqrstuvwxyz".split("");

  if (alphabet.indexOf(this.guess) !== -1) {
    console.log("Your guess: " + this.guess);
    return true;
  } else {
    console.log("That is not a valid guess! Please enter 1 letter.");
    return false;
  }
};

Letter.prototype.isCorrect = function(alphabet, word) {
  console.log(word);
};

// Swap blanks with correctly guessed letters.
Letter.prototype.swapIt = function() {};

// Export Letter prototype.
module.exports = Letter;
