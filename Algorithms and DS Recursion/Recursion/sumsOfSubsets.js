"use strict";

function sumOfSubsets(arr) {
  function iter(iArr, newArray) {
    if (iArr.length === 0) {
      newArray.push(arr.reduce((acc, item) => (acc += item), 0));
      return newArray;
    }
    const [first, ...rest] = iArr;
    newArray.push(first);
    rest.map((item) => {
      item += first;
      newArray.push(item);
      return;
    });

    return iter(rest, newArray);
  }
  return iter(arr, [0]);
}

let arr = [2, 4, 5];
console.log(sumOfSubsets(arr));
