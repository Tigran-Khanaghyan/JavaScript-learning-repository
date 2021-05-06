"use strict";

function checkUniques(arr) {
  let notUnique = () => {
    let isRepeating = false;
    for (let i = 0; i < arr.length - 1; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        if (arr[i] === arr[j]) {
          isRepeating = true;
          break;
        }
      }
    }
    return isRepeating;
  };
  return notUnique() === true
    ? "There is repeating elements in array"
    : "Array elements are unique";
}

let array = [1, 2, 3, 4, 5, 6];

console.log(checkUniques(array));
