"use strict";

/*Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1). */

function findElement(arr) {
  function iter(iArr, minimum = Infinity) {
    if (iArr.length === 0) {
      return minimum;
    }
    const [first, ...rest] = iArr;
    if (first < minimum && first >= 0) {
      minimum = first;
    }
    return iter(rest, minimum);
  }
  return iter(arr, Infinity);
}

let arr = [45, -9, 0, 15, 5, -78];
console.log(findElement(arr));
