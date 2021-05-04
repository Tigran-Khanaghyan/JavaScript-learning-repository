"use strict";

/*Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
Input Output
[45, 12, 3, 6, 17, 0] [45, 3, 17], [12, 6, 0]
[1, 3, 5, 9] [1, 3, 5, 9], [] */

function separateNumbers(arr) {
  let odd = [];
  let even = [];
  for (let item of arr) {
    if (item % 2 == 1) {
      odd.push(item);
    } else {
      even.push(item);
    }
  }
  return [odd, even];
}

console.log(separateNumbers([45, 12, 3, 6, 17, 0]));
