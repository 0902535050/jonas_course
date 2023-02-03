'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const btnCloseModal = document
  .querySelector('.close-modal')
  .addEventListener('click', closeModal);
const btnOpenModal = document.querySelectorAll('.show-modal');

const addEventToButton = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', addEventToButton);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  else window.alert('Please press esc button to close modal or click X 🤣');
});
