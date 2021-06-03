"use strict";

function sumOfSubsets(numArray, index = 0, sum = 0) {
  if (index > numArray.length - 1) {
    console.log(sum);
    return;
  }
  sumOfSubsets(numArray, index + 1, sum);
  sumOfSubsets(numArray, index + 1, sum + numArray[index]);
}

let arr = [2, 3];
sumOfSubsets(arr);
