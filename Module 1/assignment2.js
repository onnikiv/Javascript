const name = prompt("Give me your name:");
console.log(`Hello, ${name}!`);

const firstParagraphElement = document.querySelector("p");
firstParagraphElement.textContent = `Hello, ${name}!`;
