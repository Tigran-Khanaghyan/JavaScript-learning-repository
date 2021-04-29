"use strict";

/*. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
row and print them as an array.
Input Output
[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] [12, 1, 13, 15]
[[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] [45, 8, 0, -6]
[[1], [2], [3], [4]] [1, 2, 3, 4] */

let matrix = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let sumArray = [];
for (let array of matrix) {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  sumArray.push(sum);
}

console.log(sumArray);
