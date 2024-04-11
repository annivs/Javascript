'use strict';

let numbers = [];

for (let i = 0; i < 5; i++) {
  let num = parseFloat(prompt(`Anna numero:  ${i + 1}:`));
  numbers.push(num);
    }

console.log("Numerot vastakkaisessa järjestyksessä: ");
numbers.sort((a,b)=>b-a);
console.log(numbers);







