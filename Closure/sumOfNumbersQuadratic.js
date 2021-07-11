"use strict";

/*Given an array of numbers. Find the sum of numbersʼ quadratic which are even.
 */

function sumOfNumbersQuadratic(arr) {
  return function () {
    let sum = 0;
    for (let item of arr) {
      if (item % 2 === 0) {
        sum += item * item;
      }
    }
    return sum
  };
}

let numbers = [2, 6, 7, 5, 1]

console.log(sumOfNumbersQuadratic(numbers)())