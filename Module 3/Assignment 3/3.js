'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) { // i = 0, i alle names pituuden, lisätään i
    const listItem = document.createElement('li');  // listItem luonti
    listItem.textContent = names[i];  // listItemin teksti = nameslista item indeksillä
    document.body.appendChild(listItem); // 
}