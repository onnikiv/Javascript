const userInput = parseInt(prompt("Give me the number of participants:"));
console.log(`${userInput} annettu luku`)

nimiLista = [];
console.log(`Nimilista alussa: ${nimiLista}`);

for (let i = 0; i< userInput; 1++) {
    const nameInput = prompt(`${i}. Participants name:`);
    nimiLista.push(nameInput);
}

console.log(nimiLista);