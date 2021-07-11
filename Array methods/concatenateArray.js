"use strict";

/*Concatenate the two arrays

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9] */

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

function concatenateArrays() {
  let args = [...arguments];
  let newArr = [];
  args.forEach((item) => {
    newArr.push(...item);
    return newArr;
  });
  return newArr;
}

console.log(concatenateArrays(arr1, arr2, arr1, arr2));
