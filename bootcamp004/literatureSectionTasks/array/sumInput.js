"use strict";

/*Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

let array = [];

while (true) {
  let input = +prompt("Enter a number", "");
  if (Number(input) !== "number" || input === "" || input === null) break;
  else array.push(input);
}

let sum = 0;
for (let item of array) {
  sum += item;
}
console.log(sum);
