"use strict";

/*Write a function which receives an array and a number as arguments and returns a new array from the
elements of the given array which are larger than the given number.
Input Output
[10, 25, 16, -5, 30, 15, 24] , 16 [25, 30, 24]
[1, 1, 2, -3, 0, 8, 4, 0], 9 “Such values do not exist.” */

function findLargerNumbers(arr, number) {
  let newArray = [];
  for (let num of arr) {
    if (num > number) {
      newArray.push(num);
    }
  }
  if (newArray.length > 0) {
    return newArray;
  } else {
    return "Such values do not exist.";
  }
}

console.log(findLargerNumbers([1, 1, 2, -3, 0, 8, 4, 0], 9))
