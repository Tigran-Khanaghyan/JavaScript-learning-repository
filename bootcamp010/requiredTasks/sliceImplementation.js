"use strict";

function slice(arr, start, end) {
  if (!end && end !== 0) {
    end = arr.length;
  }
  if (!start && start !== 0) {
    start = 0;
  }
  if (start >= end) {
    return [];
  }
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  let resultArray = [];
  for (let i = start; i < end; ++i) {
    resultArray.push(arr[i]);
  }
  return resultArray;
}

let array = ["i", "learn", "javaScript"];

let myArray = slice(array);
let jsArray = array.slice();
console.log(myArray);
console.log(jsArray);
