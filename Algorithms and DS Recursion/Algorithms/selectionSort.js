"use strict";

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
let arr = [10, 25, -1, 7, 93, 42];
selectionSort(arr);
console.log(arr);
