// BlackJack GAME

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

let startGame = document.getElementById('start-game');
let newGameBtn = document.getElementById('new-game');
let clickBtn = document.getElementById('click-button');
let hideBtn = document.getElementById('hide-button');

clickBtn.style.display = 'none';
hideBtn.style.display = 'none';

newGameBtn.addEventListener('click', () => {
  startGame.innerHTML = "Game on ...";
  newGameBtn.style.display = "none";
  clickBtn.style.display = "inline";
  hideBtn.style.display = "inline";
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

getCardString = card => {
  return `${card.value} of ${card.suit}`;
};

getNextCard = () => {
  return deck.shift();
};

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are dealt:");
console.log(`"" ${getCardString(playerCards[0])}`);
console.log(`"" ${getCardString(playerCards[1])}`);
