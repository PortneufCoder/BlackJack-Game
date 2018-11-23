// BlackJack GAME

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'Kings', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];




createDeck = () => {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suits++) {

        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { // we loop thru all suits
            deck.push(`${values[valueIdx]} of ${suits[suitIdx]}`); // for each suit we loop thru all values
        }
    }
    return deck;

}

let deck = createDeck();

console.log("Welcome to Blackjack!");
console.log("You are dealt:");


for (let i = 0; i < deck.length; i++) {
    console.log(deck[i])
}

let playerCards = [deck[0], deck[2]];


