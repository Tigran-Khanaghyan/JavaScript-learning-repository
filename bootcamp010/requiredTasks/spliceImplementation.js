"use strict";

function splice(arr, start, deleteCount, ...args) {
  if (start < 0) {
    start = arr.length + start;
  }
  let deletedElements = [];
  let i = start;
  let j = start;
  // delete elements from origin array and add deleted elements into new array
  while (i < start + deleteCount) {
    let count = 0;
    if (start + ++count > arr.length) {
      break;
    }
    deletedElements.push(arr[start]);
    for (let k = 0; k < arr.length - start; ++k) {
      arr[start + k] = arr[start + k + 1];
    }
    --arr.length;
    ++i;
  }
  //add given elements from starting index
  for (let i = 0; i < args.length; ++i) {
    for (let k = 0; k < arr.length - j; ++k) {
      arr[arr.length - k] = arr[arr.length - k - 1];
    }
    arr[j] = args[i];
    ++j;
  }

  return deletedElements;
}
let start = -2;
let count = 7;
let arr = [1, 2, 3, 4, 5];
let arrForJsSplice = [];
let arrForMySplice = [];
for (let item of arr) {
  arrForJsSplice.push(item);
  arrForMySplice.push(item);
}

console.log(arrForJsSplice.splice(start, count, "a", "b", "c"));
console.log(splice(arrForMySplice, start, count, "a", "b", "c"));
console.log(arrForJsSplice);
console.log(arrForMySplice);
