'use strict';

/*
console.log(document.querySelector('.message').textContent); //query selector grabs .message class, textContent shows only text of that element

// Set the value of a DOM element
document.querySelector('.message').textContent = ' Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// read the value of a DOM element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Helper functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setNumberstyle = function (unit) {
  document.querySelector('.number').style.width = unit;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // reset bg, input, message, score, secretNumber + style
  setBgColor('#222');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  setScore(score);
  setNumber('?');
  setNumberstyle('15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    setNumber(secretNumber);

    // Change bg on win
    setBgColor('#60b347');

    // Change input width on win
    setNumberstyle('30rem');

    // Checking/setting the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game :(');
      setScore(0);
    }
  }

  //   // refactored at line 62
  //   // If the guess is higher
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game :(';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //If the guess is lower
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game :(';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
