'use strict';

        console.log('Oujea');

const name=' Anni';
const names = ['Anni', 'Miia', 'Soffe', 'Rosa'];
console.log('Moi' + name)
console.log('Tulostetaan kaikki nimet', name, names);

alert('Moi' + name);

//alert('Toinen alert');
const firstPElement = document.querySelector('p')
console.log(firstPElement)
firstPElement.textContent = 'Moi '+ name;

const allPElements = document.querySelectorAll('p');
console.log(allPElements);
allPElements[2].textContent = 'kolmas tekstikappale';