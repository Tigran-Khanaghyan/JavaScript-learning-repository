"use strict";

function forEach(arr, fn) {
  if (!Array.isArray(arr)) {
    return "Function`s first argument must be an array";
  } else if (typeof fn !== "function") {
    return "Function`s second argument must be a function";
  }

  for (let index = 0; index < arr.length; ++index) {
    let element = arr[index];
    fn(element, index, arr);
  }
}

let arr = [2, 4, 6, 8];
let sum = 0;
forEach(arr, (item) => (sum += item));

console.log(sum);
