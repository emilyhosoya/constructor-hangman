const frenchVerbs = [
  // {
  //   word: "être",
  //   definition: "to be"
  // },
  {
    word: "avoir",
    definition: "to have"
  },
  {
    word: "pouvoir",
    definition: "to be able (can)"
  },
  {
    word: "faire",
    definition: "to do, to make"
  },
  {
    word: "mettre",
    definition: "to put, to place"
  },
  {
    word: "dire",
    definition: "to say, to tell"
  },
  {
    word: "devoir",
    definition: "to have to , must, to owe"
  },
  {
    word: "prendre",
    definition: "to take, to catch, to capture"
  },
  {
    word: "donner",
    definition: "to give, to produce"
  },
  {
    word: "aller",
    definition: "to go"
  },
  {
    word: "vouloir",
    definition: "to want, to wish"
  },
  {
    word: "savoir",
    definition: "to know"
  },
  {
    word: "falloir",
    definition: "to have to"
  },
  {
    word: "voir",
    definition: "to see"
  },
  {
    word: "demander",
    definition: "to ask, to request"
  },
  {
    word: "trouver",
    definition: "to find, to discover"
  },
  {
    word: "rendre",
    definition: "to return (something), to give back"
  },
  {
    word: "venir",
    definition: "to come"
  },
  {
    word: "passer",
    definition: "to pass, to go past"
  },
  {
    word: "comprendre",
    definition: "to understand, to include, to comprehend"
  },
  {
    word: "rester",
    definition: "to stay, to remain"
  },
  {
    word: "tenir",
    definition: "to hold, to keep"
  },
  {
    word: "porter",
    definition: "to carry, to wear"
  },
  {
    word: "parler",
    definition: "to speak, to talk"
  },
  {
    word: "montrer",
    definition: "to show, to display"
  },
  {
    word: "continuer",
    definition: "to continue"
  },
  {
    word: "penser",
    definition: "to think"
  },
  {
    word: "suivre",
    definition: "to follow, to pay attention"
  },
  // {
  //   word: "connaître",
  //   definition: "to know, to be acquainted with"
  // },
  {
    word: "croire",
    definition: "to believe (in)"
  },
  {
    word: "commencer",
    definition: "to begin, to start, to commence"
  },
  {
    word: "compter",
    definition: "to count"
  },
  {
    word: "entendre",
    definition: "to hear, to understand"
  },
  {
    word: "attendre",
    definition: "to wait, to expect"
  },
  {
    word: "remettre",
    definition: "to put back (on), to replace, to deliver"
  },
  {
    word: "appeler",
    definition: "to call, to contact"
  },
  {
    word: "permettre",
    definition: "to permit, to allow, to enable"
  },
  {
    word: "occuper",
    definition: "to occupy, to take up (space/time)"
  },
  {
    word: "devenir",
    definition: "to become, to grow (into), to turn (into)"
  },
  {
    word: "partir",
    definition: "to leave, to depart, to proceed"
  },
  // {
  //   word: "décider",
  //   definition: "to decide, to persuade"
  // },
  {
    word: "arriver",
    definition: "to arrive, to happen"
  },
  {
    word: "servir",
    definition: "to serve"
  },
  {
    word: "sembler",
    definition: "to seem"
  },
  {
    word: "revenir",
    definition: "to return, to come back"
  },
  {
    word: "laisser",
    definition: "to leave, to allow, to let"
  },
  {
    word: "recevoir",
    definition: "to receive, to welcome"
  },
  // {
  //   word: "répondre",
  //   definition: "to answer, to reply"
  // },
  {
    word: "vivre",
    definition: "to live"
  },
  {
    word: "rappeler",
    definition: "to call back, to remind"
  },
  // {
  //   word: "présenter",
  //   definition: "to present, to introduce"
  // },
  {
    word: "accepter",
    definition: "to accept"
  },
  {
    word: "agir",
    definition: "to act"
  },
  {
    word: "poser",
    definition: "to put down, to pose, to lay (something) down"
  },
  {
    word: "jouer",
    definition: "to play, to act, to gamble"
  },
  // {
  //   word: "reconnaître",
  //   definition: "to recognize, to acknowledge"
  // },
  {
    word: "choisir",
    definition: "to choose, to select"
  },
  {
    word: "toucher",
    definition: "to touch, to feel, to affect"
  },
  {
    word: "aimer",
    definition: "to like, to love"
  },
  {
    word: "retrouver",
    definition: "to find, to regain, to meet up"
  },
  {
    word: "perdre",
    definition: "to lose, to waste"
  },
  {
    word: "expliquer",
    definition: "to explain, to account for"
  },
  // {
  //   word: "considérer",
  //   definition: "to consider, to study"
  // },
  {
    word: "ouvrir",
    definition: "to open (up)"
  },
  {
    word: "gagner",
    definition: "to win, to gain, to earn"
  },
  {
    word: "exister",
    definition: "to exist"
  },
  {
    word: "refuser",
    definition: "to refuse"
  },
  {
    word: "lire",
    definition: "to read"
  },
  // {
  //   word: "réussir",
  //   definition: "to succeed"
  // },
  {
    word: "changer",
    definition: "to change, to alter"
  },
  {
    word: "travailler",
    definition: "to work"
  },
  // {
  //   word: "représenter",
  //   definition: "to represent, to depict, to portray"
  // },
  {
    word: "assurer",
    definition: "to secure, to assure, to insure"
  },
  {
    word: "essayer",
    definition: "to try, to attempt"
  },
  // {
  //   word: "empêcher",
  //   definition: "to prevent, to stop"
  // },
  {
    word: "sortir",
    definition: "to go out, to leave, to exit, to come out"
  },
  {
    word: "reprendre",
    definition: "to resume, to recover, to take back"
  },
  {
    word: "mener",
    definition: "to lead, to conduct"
  },
  {
    word: "appartenir",
    definition: "to belong, to concern"
  },
  {
    word: "risquer",
    definition: "to risk"
  },
  {
    word: "concerner",
    definition: "to concern, to affect"
  },
  {
    word: "apprendre",
    definition: "to learn, to teach, to hear of"
  },
  {
    word: "rencontrer",
    definition: "to meet, to encounter"
  },
  // {
  //   word: "créer",
  //   definition: "to create, to build"
  // },
  {
    word: "obtenir",
    definition: "to obtain, to get"
  },
  {
    word: "chercher",
    definition: "to look for, to seek"
  },
  {
    word: "entrer",
    definition: "to enter, to go into"
  },
  {
    word: "proposer",
    definition: "to suggest, to propose, to offer"
  },
  {
    word: "apporter",
    definition: "to bring, to cause"
  },
  {
    word: "utiliser",
    definition: "to use, to employ"
  },
  {
    word: "atteindre",
    definition: "to reach, to attain, to achieve"
  },
  {
    word: "tenter",
    definition: "to tempt"
  },
  {
    word: "importer",
    definition: "to import, to matter"
  },
  {
    word: "ajouter",
    definition: "to add"
  },
  {
    word: "produire",
    definition: "to produce"
  },
  // {
  //   word: "préparer",
  //   definition: "to prepare (something), to make"
  // },
  {
    word: "relever",
    definition: "to raise, to stand up, to pick up"
  },
  // {
  //   word: "écrire",
  //   definition: "to write"
  // },
  // {
  //   word: "défendre",
  //   definition: "to defend, to stand up for, to forbid"
  // },
  {
    word: "tirer",
    definition: "to pull, to draw (curtains, sword), to fire (gun), to print"
  }
];

module.exports = frenchVerbs;
