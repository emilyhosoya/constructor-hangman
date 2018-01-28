const frenchAlphabet = "abcdefghijklmnopqrstuvwxyzàâçéèêëïîôùûü".split("");

// Turn French accented characters into base letters.
const frenchAccentHandler = function(word) {
  word.forEach(character => {
    switch (character) {
      case "à":
      case "â":
        new Intl.Collator("fr", { sensitivity: "base" }).compare(
          character,
          "a"
        ) === 0
          ? ((character = "a"), console.log(character))
          : console.log(character);
        break;
      case "é":
      case "ê":
      case "è":
      case "ë":
        new Intl.Collator("fr", { sensitivity: "base" }).compare(
          character,
          "e"
        ) === 0
          ? ((character = "e"), console.log(character))
          : console.log(character);
        break;
      case "î":
      case "ï":
        new Intl.Collator("fr", { sensitivity: "base" }).compare(
          character,
          "i"
        ) === 0
          ? ((character = "i"), console.log(character))
          : console.log(character);
        break;
      case "ô":
        new Intl.Collator("fr", { sensitivity: "base" }).compare(
          character,
          "o"
        ) === 0
          ? ((character = "o"), console.log(character))
          : console.log(character);
        break;
      case "û":
      case "ù":
      case "ü":
        new Intl.Collator("fr", { sensitivity: "base" }).compare(
          character,
          "u"
        ) === 0
          ? ((character = "u"), console.log(character))
          : console.log(character);
        break;
      case "ç":
        new Intl.Collator("fr", { sensitivity: "base" }).compare(
          character,
          "c"
        ) === 0
          ? ((character = "c"), console.log(character))
          : console.log(character);
        break;
      default:
        console.log(character);
    }
  });
};

module.exports = frenchAlphabet;
