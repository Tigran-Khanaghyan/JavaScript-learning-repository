"use strict";

/*Enter a number. Reverse its first and last digits. Print the new number.
Input Output
2 2
13 31
895796 695798 */

let number = 57;
let newStr = "";

let str = String(number);
if (number > -10 && number < 10) {
  console.log(number);
} else {
  newStr = str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
  console.log(Number(newStr));
}
