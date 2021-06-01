"use strict";

// Merge sort algorithm 1

function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let arr = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      arr.push(arr1[index1++]);
    } else {
      arr.push(arr2[index2++]);
    }
  }
  while (index1 < arr1.length) {
    arr.push(arr1[index1++]);
  }
  while (index2 < arr2.length) {
    arr.push(arr2[index2++]);
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let medium = parseInt(arr.length / 2);
  let left = arr.slice(0, medium);
  let right = arr.slice(medium, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

let arr = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(arr));
