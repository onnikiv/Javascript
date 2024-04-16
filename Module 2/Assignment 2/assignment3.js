let koirat = [];
for (let i = 1; i < 7; i++) {
  let koira = prompt(`Anna ${i}. Koiran nimi.`);
  console.log(`${i}. ${koira}`);
  koirat.push(koira);
}

koirat.sort(function (a, b) {
  return b - a;
});

console.log(`${koirat}`);
