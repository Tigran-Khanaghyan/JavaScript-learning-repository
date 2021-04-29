"use strict";

/*. Find the sign of product of three numbers without multiplication operator. Display the specified sign.
Input Output
-14, 5, 0 “unsigned”
-8, 9, -6 “+”
4, 19, -2 “-” */

let a = -14;
let b = 5;
let c = -7;
let count = 0;
let str = "";

let array = [a, b, c];
for (let item of array) {
  if (item === 0) {
    str = "unsigned";
    break;
  } else if (item < 0) {
    ++count;
  }
}
if (str === "unsigned") console.log("unsigned");
else if (count % 2 === 0 && str !== "unsigned") console.log("+");
else console.log("-");
