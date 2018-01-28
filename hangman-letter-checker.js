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

  checkAnswer(lettersGuessed, wordLetters, wordBlanks, guessesLeft) {
    // for each item in randomLetters, check if it matches currentGuess
    for (let i = 0; i < wordLetters.length; i++) {
      if (this.guess === wordLetters[i]) {
        wordBlanks[i] = wordLetters[i];
      }
    }

    if (
      // If guess is in the wordLetters array, and is NOT in lettersGuessed.
      wordLetters.indexOf(this.guess) !== -1 &&
      lettersGuessed.indexOf(this.guess) === -1
    ) {
      console.log("Correct guess");
      lettersGuessed.push(this.guess);
      // Else if guess is already in lettersGessed.
    } else if (lettersGuessed.indexOf(this.guess) !== -1) {
      console.log("You've already guessed that letter!");
    } else {
      console.log("That letter is not part of the word.");
      lettersGuessed.push(this.guess);
      //   guessesLeft--; not working!
    }

    console.log(wordBlanks);
  }
}

// Export Letter prototype.
module.exports = Letter;
