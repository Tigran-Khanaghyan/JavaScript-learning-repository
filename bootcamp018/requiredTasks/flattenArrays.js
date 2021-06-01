"use strict";

/*Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays). */

function flatArrays(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = [...acc, ...item];
      return flatArrays(acc);
    }
    acc = [...acc, item];
    return acc;
  }, []);
}

let arr = [1, [3, 4, [[1], 2]], 10];
console.log(flatArrays(arr));
