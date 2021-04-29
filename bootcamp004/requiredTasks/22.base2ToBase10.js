"use strict";

/*Convert base-2 number to base-10
Input Output
010 2
10010 18
0101011 43 */

let number = "10010";
let i = 0;
let base10 = 0;

while (i < number.length) {
  base10 += +number[number.length - i - 1] * 2 ** (number.length - i);
  ++i;
}

console.log(base10);
