// Shift+ALT+F to format the code
// Sääntö 1. -- AVAA KEHITYSTYÖKALUT

'use strict'; // Koodin suoritus vaativaksi

console.log("I have awaken!");

const name = "Onni";
const names = ["Aku", "Iines", "Heluna"];

let age, height;
age = 13;
console.log(age, typeof age, height, typeof height);

console.log("Moro " + name + "!");
console.log("Tulostetaan kaikki nimet:", name, names);

alert("Moro " + name);

// alert('Toinen alertti');

// haetaan viittaus ensimmäiseen p-elementtiin
const firstParagraphElement = document.querySelector("p");
console.log(firstParagraphElement);
// muutetaan p-elementin tekstisisältöä
firstParagraphElement.textContent = "Moro " + name;

const allParagraphElements = document.querySelectorAll("p");
console.log(allParagraphElements);
allParagraphElements[2].textContent = "Hihii";
