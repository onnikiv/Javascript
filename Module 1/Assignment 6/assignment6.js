"use strict";

const calculateQuery = confirm("Should I calculate the square root?");
if (calculateQuery) {
  const numberInput = prompt(`Enter a number: `);
  console.log(numberInput);
  if (isNaN(numberInput) || numberInput < 0) {
    alert("The square root of a negative number is not defined");
  }
  let number = parseInt(numberInput);
  console.log(number);
  let squareRoot = Math.sqrt(number);
  console.log(squareRoot);
  document.querySelector("p").textContent =
    "The square root of " + number + " is " + squareRoot + ".";
} else {
  document.querySelector("p").textContent =
    "The square root is not calculated.";
}
