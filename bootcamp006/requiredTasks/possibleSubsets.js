"use strict";

/*. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
elements in the array are unique. */

function possibleSubsets(arr) {
  let array = [];

  for (let i = 0; i < arr.length - 2; ++i) {
    for (let j = i + 1; j < arr.length - 1; ++j) {
      for (let k = j + 1; k < arr.length; ++k) {
        let tempArray = [arr[i], arr[j], arr[k]];
        array.push(tempArray);
      }
    }
  }
  return array;
}

let array = [5, 9, 23, 0, -2, -1];
console.log(possibleSubsets(array));
