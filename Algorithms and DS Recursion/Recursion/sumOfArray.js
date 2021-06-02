"use strict";

function arrSum(arr) {
  // code
  function iter(iArr, acc = 0) {
    if (iArr.length === 0) {
      return acc;
    }
    const [first, ...rest] = iArr;

    return iter(rest, acc + first);
  }

  return iter(arr, 0);
}

console.log(arrSum([1, 2, 3, 4]));
