// BlackJack GAME
/*jshint esversion: 6 */

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

let values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

let startGame = document.getElementById("start-game");
let newGameBtn = document.getElementById("new-game");
let clickBtn = document.getElementById("click-button");
let hideBtn = document.getElementById("hide-button");

let gameStarted = false,
  gameOver = false,
  playerWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

clickBtn.style.display = "none";
hideBtn.style.display = "none";
showStatus();

newGameBtn.addEventListener("click", () => {

  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffledeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  startGame.innerHTML = "Game on ...";
  newGameBtn.style.display = "none";
  clickBtn.style.display = "inline";
  hideBtn.style.display = "inline";
  showStatus();
});

createDeck = () => {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suits++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      // we loop thru all suits
      let card = {
        // object holding each item in both arrays
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card); // for each suit we loop thru all values
    }
  }
  return deck;
};

shuffledeck = deck => {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
};

getCardString = card => {
  return `${card.value} of ${card.suit}`;
};

getNextCard = () => {
  return deck.shift();
};

showStatus = () => {
  if (!gameStarted) {
    startGame.innerHTML = "Welcome to Bl@ck J@cK!";
    return;
  }
  for (let i = 0; i < deck.length; i++) {
    startGame.innerHTML += `\n ${getCardString(deck[i])}`;
  }
};



console.log("Welcome to Blackjack!");
console.log("You are dealt:");
console.log(`"" ${getCardString(playerCards[0])}`);
console.log(`"" ${getCardString(playerCards[1])}`);
