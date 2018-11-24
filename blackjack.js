// BlackJack GAME

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];


createDeck = () => {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suits++) {

        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { // we loop thru all suits
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card); // for each suit we loop thru all values
        }
    }
    return deck;

}

getCardString = (card) => {
    return `${card.value} of ${card.suit}`
}

getNextCard = () => {
    return deck.shift()
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are dealt:");
console.log(`"" ${getCardString(playerCards[0])}`);
console.log(`"" ${getCardString(playerCards[1])}`);






