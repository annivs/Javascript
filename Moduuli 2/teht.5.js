'use strict'
function main() {
    let numbers = [];

    while (true) {
        let num = parseInt(prompt("Anna numero (sama numero lopettaa): "));
        if (numbers.includes(num)) {
            alert("Number already entered.");
            break;
        }
        numbers.push(num);
    }

    numbers.sort((a, b) => a - b);

    console.log("Annetut numerot kasvavassa järjestyksessä:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

main();
