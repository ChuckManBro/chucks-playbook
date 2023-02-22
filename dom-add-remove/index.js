'use strict';
// CHUCK'S JAVASCRIPT SANDBOX

// REMOVE & ADD
const paragraphFrame = document.querySelector('.paragraph-frame');
const buttonAdd = document.getElementById('btn-add');
const buttonRemove = document.getElementById('btn-remove');

// Remove
buttonRemove.addEventListener('click', () => {
	const paragraphElement = document.querySelector('.temporary-text');
	paragraphElement.parentNode.removeChild(paragraphElement);
});

// Add

buttonAdd.addEventListener('click', () => {
	// Generate the new p element
	const newElement = document.createElement('p');
	// Give it a class of temporary-text
	newElement.classList.add('temporary-text');
	// Give it text (may also use .innerHTML method)
	newElement.textContent = 'The quick brown fox jumps over the lazy dog.';
	// Append this newly generated element inside paragraph-frame
	paragraphFrame.appendChild(newElement);
});
