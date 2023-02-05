// SHUFFLE

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let r = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[r]] = [arr[r], arr[i]];
	}
	return arr;
}

const shuffledDeck = (deck) => {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); //Fisher-yates algorithm
		const temp = deck[i];
		deck[i] = deck[j];
		deck[j] = temp;
	}
};

// Shuffle Test:
let newArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(shuffle(newArray));

// Swap Example:
let fruitOne = 'apple';
let fruitTwo = 'banana';
console.log(`fruitOne was ${fruitOne} before the swap.`);
console.log(`fruitTwo was ${fruitTwo} before the swap.`);
[fruitOne, fruitTwo] = [fruitTwo, fruitOne];
console.log(`fruitOne is now ${fruitOne}.`);
console.log(`fruitTwo is now ${fruitTwo}.`);
