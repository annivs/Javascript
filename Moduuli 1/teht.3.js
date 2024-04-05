'use strict'

const num1 = parseInt(prompt("Anna eka numero:"));
const num2 = parseInt(prompt("EAnna toka numero:"));
const num3 = parseInt(prompt("EAnna kolmas numero:"));

// Laske summa, tulo ja keskiarvo
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector('#tulokset').innerHTML =" Sum: " + sum + " Product: " + product + " Average: " + average;

