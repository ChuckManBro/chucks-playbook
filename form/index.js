'use strict';
// HTML Form

const myForm = document.querySelector(`#my-form`);
const firstName = document.querySelector(`#first-name`);
// This gets the 2nd 'input' element (because no id)
const lastName = document.getElementsByTagName('input')[1];
const resultMessage = document.querySelector(`#result-message`);

myForm.addEventListener('submit', function (e) {
	e.preventDefault();
	resultMessage.textContent = `Hello, ${firstName.value} ${lastName.value}! We're glad you're here.`;
});
