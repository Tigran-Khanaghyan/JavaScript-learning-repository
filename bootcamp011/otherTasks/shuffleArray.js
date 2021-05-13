"use strict";

let swap = function (a, b) {
  let temp = a;
  a = b;
  b = temp;
};

function shuffleArray(arr, arrayLength) {
  let x = Math.floor(Math.random() * arrayLength);
  if (x === arr.length - 1) {
    [arr[x], arr[0]] = [arr[0], arr[x]];
  } else {
    [arr[x], arr[x + 1]] = [arr[x + 1], arr[x]];
  }

  return arr;
}

let arr = [1, 2, 3, 4];

console.log(shuffleArray(arr, 4));
