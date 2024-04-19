'use strict'
const name = prompt('Enter your name')
const num = Math.floor(Math.random() * 4 + 1)
let text;

if (num === 1) {
  text='Gry'
} else if (num === 2) {
  text = 'Sky'
} else if (num === 3) {
  text = 'Huff'
} else {
  text = 'Rav'
}

document.querySelector('#target').innerHTML = `${name}, you are ${text} !`