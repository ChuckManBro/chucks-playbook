'use strict';
// ARRAY METHODS

const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 },
];

// FILTER - new array created, original array not mutated

// filter items with price of 100 or less:
const filteredItems = items.filter((item) => {
	return item.price <= 100;
});
console.log(`Filtered to less than 100:`);
console.table(filteredItems);

// MAP

// This 'map' generates an array of each object converted to its name only:
const itemNames = items.map((item) => {
	return item.name;
});
console.log(`Filtered to Names only: ${itemNames}`);

// another MAP example - new array of transformed elements
const myRealGrades = [55, 60, 70];
const betterGrades = myRealGrades.map((grade) => grade + 10);
console.log(`Mapped to better grades: ${betterGrades}`);

// REDUCE - iterates through the array to create a sum total

const richPeople = [
	{ name: `Tim Cook`, value: 30 },
	{ name: `Jeff Bezos`, value: 70 },
	{ name: `Mark Zuckerbert`, value: 40 },
	{ name: `Elon Musk`, value: 60 },
];

const totalWealth = richPeople.reduce((a, person) => a + person.value, 0);
// (0 is the starting accumulator)
console.log(`Total wealth 'reduced' to one number: ${totalWealth}`);

// another REDUCE

const bill = [8, 12, 17, 3, 10];

const totalBill = bill.reduce((accumulator, currentValue) => accumulator + currentValue);
// (This one doesn't need the 0 for the starting accumulator)
console.log(`Total bill 'reduced' to one number: ${totalBill}`);
