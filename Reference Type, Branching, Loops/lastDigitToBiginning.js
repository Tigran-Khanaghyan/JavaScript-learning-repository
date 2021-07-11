"use strict";

/*. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the
last digit of the inserted number is 0, number remains the same.
Input Output
367 736
1002 2100
250 250
8 8 */

let a = 367;
let b = 1002;
let c = 250;
let d = 8;
let newNumber;

let str = String(a);
if (str[str.length - 1] !== "0") {
  let newStr = str[str.length - 1] + str.slice(0, str.length - 1);
  newNumber = Number(newStr);
} else {
  newNumber = Number(str);
}
console.log(newNumber);
