"use strict";

/*. Insert a digit and a number. Check whether the digits contains in the number or not.
Input Output
5, 2463 ‘Noʼ
4, 6 ‘Noʼ
8, 45689 ‘Yesʼ */

// let digit = +prompt("Enter a digit", "")
// let number = +prompt("Enter a number", "")

let digit = 5;
let number = 24635;
let isExist = false;

let str = String(number);
for (let char of str) {
  if (char == digit) {
    isExist = true;
    break;
  }
}
if (isExist) console.log("Yes");
else console.log("No");
