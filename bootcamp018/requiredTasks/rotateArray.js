"use strict";

/*Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift()) */

function rotateArray(arr, n) {
  if (n === 0) {
    return arr;
  }
  if (n > 0) {
    arr.push(arr[0]);
    arr.shift();
    return rotateArray(arr, --n);
  }
  n = arr.length + n;
  arr.push(arr[0]);
  arr.shift();
  return rotateArray(arr, --n);
}
let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
let n = -2;
console.log(rotateArray(arr, n));
