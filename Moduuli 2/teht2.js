'use strict'

const participants = [];
let count = parseInt(prompt('How many participants?'));

for (let i = 0; i < count; i++) {
  participants.push(prompt(`Names of the participants: ${i+1}`));
}

participants.sort();
const listItem = participants.map(name => `<li>${name}</li>`);
document.getElementById('names').innerHTML = listItem.join('');