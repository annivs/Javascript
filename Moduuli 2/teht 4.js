const kysytytNumerot = [];
let nolla = 0;

while (!kysytytNumerot.includes(nolla)) {
  let luku = parseInt(prompt("Anna luku:"));
  kysytytNumerot.push(luku);
}

kysytytNumerot.sort(function (a, b) {
  return b - a;
});
console.log(kysytytNumerot);
