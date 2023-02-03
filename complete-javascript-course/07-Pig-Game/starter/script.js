'use strict';

const player0 = document.querySelector('.player--0');
const score0 = document.querySelector('#score--0');
const currentScore0 = document.querySelector('#current--0');

const player1 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, disable;

// Starting conditions
const init = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  disable = false;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Reset the game
btnNew.addEventListener('click', init);

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (!disable) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1 if true
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

// Holding point

btnHold.addEventListener('click', function () {
  if (!disable) {
    // 1. Add current score to active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2. Check if player's score is >= 100
    if (score[activePlayer] >= 100) {
      disable = true;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});

init();
