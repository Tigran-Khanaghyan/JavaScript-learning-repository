"use strict";

/*Write a function, which receives a string, finds possible largest numbers in the string and returns their
sum.
Input Output
“FwrtY45KHL120mn10P” 175
“Wert12lop-12” 0 */

function findNumbersInString(str) {
  let numbers = [];
  let tempArray = [];
  let sum = 0;
  for (let char of str) {
    if (isNaN(char) && char !== "-") {
      str = str.replace(char, "*");
    }
  }
  tempArray = str.split("*");
  for (let item of tempArray) {
    if (Number(item)) {
      numbers.push(Number(item));
    }
  }
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(findNumbersInString("Wert12lop-12"));
