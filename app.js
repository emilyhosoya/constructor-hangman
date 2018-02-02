const inquirer = require("inquirer");
const frenchVerbs = require("./french-verbs.js");
const frenchAlphabet = require("./french-alphabet.js");
const Word = require("./hangman-word-generator.js");
const Letter = require("./hangman-letter-checker.js");

let randomWord = {};
let guessesLeft = 10;
let lettersGuessed = [];

// Custom game rules or introduction.
const gameRules = () => {
  console.log(
    `~*~*~*~*~*~*~*~*~*~*~*~*~
    Salut, copains!
    Test your French language knowledge with this version of Hangman.
    Things to note:
    * All verbs are in infinitive form ("to ---").
    * Don't worry about accent marks, just type in the letter without accents.`
  );
};

// Ask the user if they want to start a new game.
const startPrompt = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "start",
        message: "New game?"
      }
    ])
    .then(answer => {
      answer.start ? newGame() : console.log("Ok, maybe another time.");
    })
    .catch(error => {
      console.log(error);
    });
};

// When a new game starts, generate a random word.
const newGame = () => {
  guessesLeft = 10;
  lettersGuessed = [];

  console.log(`
  Great! Here's your word:
  `);
  randomWord = new Word(frenchVerbs);
  randomWord.letterize();
  randomWord.blankify(frenchAlphabet);

  showStats();
  promptGuess();
};

// Show remaining guesses and guesses made.
const showStats = () => {
  console.log(
    `
    * Meaning: ${randomWord.definition}
    * Guesses left: ${guessesLeft}
    * Letters guessed: ${lettersGuessed.toString()}`
  );
};

// Decrease guesses.
const minusGuess = () => {
  guessesLeft--;
};

// Prompt player to guess a letter.
const promptGuess = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess a letter:"
      }
    ])
    .then(answer => {
      let guess = new Letter(answer);
      guess.isValid(frenchAlphabet)
        ? (guess.checkAnswer(
            lettersGuessed,
            randomLetters,
            randomBlanks,
            minusGuess
          ),
          showStats(),
          checkWinOrLose())
        : promptGuess();
    })
    .catch(error => {
      console.log(error);
    });
};

// Check if player has won or lost.
const checkWinOrLose = () => {
  if (randomBlanks.indexOf("_") === -1 && guessesLeft > 0) {
    console.log("Hooray, you win!");
    startPrompt();
  } else if (guessesLeft === 0) {
    console.log("No win this time.");
    startPrompt();
  } else {
    promptGuess();
  }
};

gameRules();
startPrompt();
