'use strict';

// Query Selectors into Variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Functions to open and close Modal
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Put Event Listeners on each of the buttons
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close Modal with the X button
btnCloseModal.addEventListener('click', closeModal);

// Close Modal by clicking outside the Modal
overlay.addEventListener('click', closeModal);

// Close Modal with Escape Key (if 'Escape' key is pressed and  if Modal is not hidden)
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
