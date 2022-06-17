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

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;

  // reset bg, input, message, score, secretNumber + style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // Change bg on win
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Change input width on win
    document.querySelector('.number').style.width = '30rem';

    // If the guess is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }

    //If the guess is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }
  }
});
