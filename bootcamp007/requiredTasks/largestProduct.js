"use strict";

/*Given an array of integers, find the pair of adjacent
 elements that has the largest product and return that product. */

let array = [4, 6, 17, -1, 0, 8, -5];

function findLargestProduct(arr) {
  let largestProduct = function () {
    let maxProduct = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; ++i) {
      for (let j = i + 1; j < i + 2; ++j) {
        if (arr[i] * arr[j] > maxProduct) {
          maxProduct = arr[i] * arr[j];
        }
      }
    }
    return maxProduct;
  };
  return largestProduct();
}

console.log(findLargestProduct(array));
