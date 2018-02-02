// Prototype an object from the user's guess.
class Letter {
  constructor(answer) {
    this.guess = answer.guess.toLowerCase();
  }

  // Check if the letter is in the alphabet.
  isValid(alphabet) {
    // Default Standard English alphabet if none is provided.
    alphabet = alphabet || "abcdefghijklmnopqrstuvwxyz".split("");

    if (alphabet.indexOf(this.guess) !== -1) {
      console.log("Your guess: " + this.guess);
      return true;
    } else {
      console.log("That is not a valid guess! Please enter a letter.");
      return false;
    }
  }

  checkAnswer(lettersGuessed, wordLetters, wordBlanks, minusGuess) {
    // for each item in randomLetters, check if it matches currentGuess
    for (let i = 0; i < wordLetters.length; i++) {
      if (this.guess === wordLetters[i]) {
        wordBlanks[i] = wordLetters[i];
      }
    }

    if (
      // If guess is correct and not guessed already.
      wordLetters.indexOf(this.guess) !== -1 &&
      lettersGuessed.indexOf(this.guess) === -1
    ) {
      console.log("Correct guess");
      lettersGuessed.push(this.guess);
      minusGuess();
      // If guess has already been made.
    } else if (lettersGuessed.indexOf(this.guess) !== -1) {
      console.log("You've already guessed that letter!");
      // If guess is wrong.
    } else {
      console.log("That letter is not part of the word.");
      lettersGuessed.push(this.guess);
      minusGuess();
    }

    console.log(wordBlanks);
  }
}

// Export Letter prototype.
module.exports = Letter;
