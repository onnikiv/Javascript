const userInput = parseInt(prompt("Give me the number of participants:"));

nameList = [];
for (let i = 1; i <= userInput; i++) {
    const nameInput = prompt(`${i}. Participants name:`);
    nameList.push(nameInput);
}

console.log(nameList);

let sortedNamelist = nameList.sort();

console.log(sortedNamelist);

const listItem = document.createElement("li")
listItem