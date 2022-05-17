'use strict';

console.log(document.querySelector('.message').textContent); //query selector grabs .message class, textContent shows only text of that element

document.querySelector('.message').textContent = ' Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// read the value of a DOM element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
