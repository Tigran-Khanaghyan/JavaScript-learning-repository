"use strict";

function map(array, fn) {
  let arr = [];

  for (let i = 0; i < array.length; ++i) {
    // implement fn function for every arr element and push it into new array
    arr.push(fn(array[i], i, array));
  }
  return arr;
}

let arr = [2, 4, 6, 8];
function multiply(x) {
  return (x *= 2);
}

console.log(map(arr, multiply));
