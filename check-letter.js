checkForAccents(input) {
    switch (input) {
      case "a":
        randomWordLetters.filter(function(letter) {
       if ((letter === "â") || (letter === "à")) {
      //   console.log(result);
       } else {
          //  break;
       };
       break;
      });
        // check if random word letters contains "â" || "à";
        // run swap function on that index 
      case "e":
        // check if random word contains "é" || "ê" || "è" || "ë";
        alert("hello");
        break;
      case "i":
        // check if random word contains "î" || "ï";
        alert("goodbye");
        break;
      case "o":
        // check if random word contains ô";
        alert("hello");
        break;
      case "u":
        // check if random word contains "û" || "ù" || "ü";
        alert("hello");
        break;
      case "c":
        // check if random word contains "ç";
        alert("goodbye");
        break;
    }
  }

// const makePlayers = (runUntil, currentIndex) => {
//   if (currentIndex === undefined) {
//     currentIndex = 1;
//   }
// };


module.exports = Letter;