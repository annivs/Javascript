const koirat = [];
for (let i = 1; i < 7; i++) {
  const koira = prompt(`Anna ${i}. Koiran nimi.`);
  console.log(`${i}. ${koira}`);
  koirat.push(koira);
}

koirat.sort(function (a, b) {
  return b.localeCompare(a);
});

console.log(`${koirat}`);

const unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);

koirat.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent = name;
  unorderedList.appendChild(listItem);
});