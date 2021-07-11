"use strict";

/*Write a function, which receives two numbers as arguments and finds all numbers between them such
that each digit of the number is even. The numbers obtained should be printed in a comma-separated
sequence on a single line.
Input Output
19, 42 “20, 22, 24, 26, 28, 40, 42”
99, 199 “Such numbers does not exist.” */

function digitsAreEven(start, end) {
  let str = "";
  for (let i = start + 1; i <= end; ++i) {
    let isEven = true;
    let tempNumber = i;
    while (tempNumber !== 0) {
      if (tempNumber % 2 !== 0) {
        isEven = false;
        break;
      }
      tempNumber = Math.floor(tempNumber / 10);
    }
    if (isEven) {
      str = str + i + ",";
    } else {
      return "Such numbers does not exist.";
    }
  }
  return str;
}

console.log(digitsAreEven(99, 199));
