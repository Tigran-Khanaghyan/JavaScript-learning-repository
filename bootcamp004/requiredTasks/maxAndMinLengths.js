"use strict";

/*Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
their lengths.
Input Output
['anymore”, “raven”, “me”, “communicate”] 13
[“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”] 14 */

let array = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];

let maxCount = array[0].length;
let minCount = array[0].length;

for (let item of array) {
  if (item.length > maxCount) maxCount = item.length;
  if (item.length < minCount) minCount = item.length;
}

console.log(maxCount + minCount);
