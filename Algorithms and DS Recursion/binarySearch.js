"use strict";

function findByVal(arr, value) {
  let mid = Math.floor(arr.length / 2);

  if (value === arr[mid]) {
    return mid;
  }
  if (arr[mid] > value) {
    arr = arr.slice(0, mid);
    return findByVal(arr, value);
  }

  if (arr[mid] < value) {
    arr = arr.slice(mid);
    return findByVal(arr, value);
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(findByVal(arr, 2));
