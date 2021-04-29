"use strict";

/*Given an array of numbers and a number. Find the index of a first element which is equal to that number.
If there is not such a number, that find the index of the first element which is the closest to it.
Input Output
[21, -9, 15, 2116, -71, 33], -71 4
[ 36, -12, 47, -58, 148, -55, -19, 10], -56 5
[5, 46, 17, -2, 89, 0, 26 ] 36 1 */

let array = [36, -12, 47, -58, 148, -55, -19, 10];
let number = 45;
let index;
let closestNumber = array[0];
let closest = Math.abs(array[0] - number);

for (let item of array) {
  if (item === number) {
    index = array.indexOf(item);
    break;
  } else if (Math.abs(item - number) < closest) {
    closest = Math.abs(item - number);
    closestNumber = item;
  }
}

if (index) console.log(index);
else console.log(closestNumber);
