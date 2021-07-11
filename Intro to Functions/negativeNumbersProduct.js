"use strict";

/*Write a function, which receives an array as an argument which elements arrays of numbers. Find
product of biggest negative number of each array. If there is not any negative number, ignore that array.
Check that items of the given array are arrays.
Input Output
[[2, -9, -3, 0], [1, 2], [-4 , -11, 0]] 12
[[3, 4], [11, 0], [5, 6, 7, 8]] ‘No negatives
[1, 2, 3] ‘Invalid Argument */

function negativeNumbersProduct(arr) {
  let arrayProduct = 1;
  let noNegative = true;
  for (let item of arr) {
    let isNegative = false;
    let maxNegative = -Infinity;
    if (Array.isArray(item)) {
      for (let elem of item) {
        if (elem < 0 && elem > maxNegative) {
          maxNegative = elem;
          isNegative = true;
        }
      }
      if (isNegative) {
        arrayProduct *= maxNegative;
        noNegative = false;
      }
    } else {
      return "Invalid Argument";
    }
  }
  if (noNegative) {
    return "No negatives";
  } else {
    return arrayProduct;
  }
}
let array = [
  [2, -9, -3, 0],
  [1, 2],
  [-4, -11, 0],
];

console.log(negativeNumbersProduct(array));
