'use strict';

// document.querySelector('.message').textContent = '😂 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 33;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const playAgain = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '';
};

const checkValue = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '😁 No number, pls input some number !!!';
  } else if (guess === secretNumber) {
    document.querySelector('body').style.background = '#60b347';
    displayMessage('😁 Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else {
    if (score > 0) {
      score--;
      displayMessage(guess > secretNumber ? '😁 Too high' : '😁 Too low');
      document.querySelector('.score').textContent = score;
    } else {
      window.alert('you lose!');
      displayMessage('Start guessing...');
      document.querySelector('.score').textContent = 20;
    }
  }
};
document.querySelector('.check').addEventListener('click', checkValue);
document.querySelector('.again').addEventListener('click', playAgain);
