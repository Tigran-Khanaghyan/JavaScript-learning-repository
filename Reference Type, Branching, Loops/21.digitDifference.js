"use strict";

/*Enter a number. Find the difference between its biggest and smallest digits.
Input Output
5 0
152 4
4593653 6 */

let number = 4;

let str = String(number);

let biggest = str[0];
let smallest = str[0];

for (let num of str) {
  if (num > biggest) biggest = +num;
  if (num < smallest) smallest = +num;
}
console.log(biggest - smallest);
