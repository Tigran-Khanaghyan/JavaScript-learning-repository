"use strict";

/*Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a new
array where each element from that array is placed under the index of its value. Start from the smallest
value and end with the biggest one. If there are missing values, put in its places undefined.

| Input | Output |
| --------- | ----------- |
| [4, 3, 0, 9] | [0, undefined, undefined, 3, 4, undefined, undefined,
undefined, undefined, 9] */

let array = [4, 3, 0, 9];
let maxMember = array[0];
for (let item of array) {
  if (item > maxMember) maxMember = item;
}
let newArray = [];

for (let i = 0; i <= maxMember; ++i) {
  if (array.includes(i)) {
    newArray.push(i);
  } else {
    newArray.push(undefined);
  }
}

console.log(newArray);
