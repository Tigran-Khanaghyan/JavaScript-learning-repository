"use strict";

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
let arr = [10, 25, -1, 7, 93, 42];
bubbleSort(arr);
console.log(arr);
