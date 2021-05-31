"use strict";

function removeFirstElement(arr) {
  function iter(iArr, array) {
    if (iArr.length === arr.length - 1) {
      return array;
    }
    const [first, ...rest] = iArr;
    array = rest;
    return iter(rest, array);
  }
  return iter(arr, []);
}

let arr = [6];
console.log(removeFirstElement(arr));
