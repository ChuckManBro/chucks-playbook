// FOR...IN LOOP - iterates keys in an object

let profile = {
	'First Name': 'John',
	'Last Name': 'Doe',
	Age: 28,
	Pet: 'Buster',
	'Security Clearance': true,
};

for (let key in profile) {
	console.log(key);
}

for (let iteratingKey in profile) {
	console.log(iteratingKey, ':', profile[iteratingKey]);
}

// FOR...OF LOOP - iterates items of an array

let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

for (let iteratingElement of rainbowColors) {
	console.log(iteratingElement);
}

// The above FOR...OF loop will work on an ARRAY (which contains "items" with implied index numbers starting at 0).
// The below FOR...OF loop will NOT work on an OBJECT (which contains "keys" and "values").

for (let key of profile) {
	console.log(key);
}
