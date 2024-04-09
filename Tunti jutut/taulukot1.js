// JS mod 2 - taulukot

const names = [];
// Alkioon viittaaminen indeksin avulla
names[0] = "Aku";
names[4] = "Iines";

console.log(names[2]);

// Taulukon loppuun lisääminen
names.push("Hannu");
console.log(names);

// Taulukkon viimeisen arvon poistaminen
names.pop();
console.log(names);
