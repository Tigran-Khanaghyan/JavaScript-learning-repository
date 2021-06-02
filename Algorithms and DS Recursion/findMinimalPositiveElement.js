"use strict";

/*Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1). */

function findElement(arr) {
  function iter(iArr, minimum) {
    if (iArr.length === 0 && minimum !== Infinity) {
      return minimum;
    }
    if(iArr.length === 0 && minimum === Infinity){
        return -1
    }
    const [first, ...rest] = iArr;
    if (first < minimum && first >= 0) {
      minimum = first;
    }
    return iter(rest, minimum);
  }
  return iter(arr, Infinity);
}

let arr = [-45, -9, -15, -5, -78];
console.log(findElement(arr));
