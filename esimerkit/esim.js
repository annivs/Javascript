'use strict';

        console.log('Oujea');

let name=' Anni';
const names = ['Anni', 'Miia', 'Soffe', 'Rosa'];

let age, height;
age = 5.1;
console.log(age, typeof age,  height, typeof height);

// muutetaan numero stringiksi
age = age.toString();
console.log (age);

// muutetaan string numeroksi
age = 5;

// age parseInt(age); // ottaa vaan kokonaisosan
age= parseFloat(age);
console.log(age, typeof age);

const ageAdd = 3;
// lisätään arvoon 1
age++;
// sama
age= age + 1
// tai
age += 1

console.log(age + ageAdd);

console.log(name + 'n ikä on '+ age + 'vuotta');
console.log(` ${name}n ikä oon ${age}  vuotta.`);


const isUnderAge = true;
console.log(isUnderAge, typeof isUnderAge)

console.log('Moi' + name)
console.log('Tulostetaan kaikki nimet', name, names);

//alert('Moi' + name);

//alert('Toinen alert');
const firstPElement = document.querySelector('p')
console.log(firstPElement)
firstPElement.textContent = 'Moi '+ name;

const allPElements = document.querySelectorAll('p');
console.log(allPElements);
allPElements[2].textContent = 'oujea';

// syötteen lukeminen suoraan JS
//name=
//prompt('Anna nimi');
//console.log(name, typeof name);

// Math

console.log(Math.random())

// arvotaan arvo väliltä 1-6

console.log(Math.floor(Math.random()*6+1))