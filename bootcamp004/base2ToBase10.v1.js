"use strict";

/*Convert base-2 number to base-10
Input Output
010 2
10010 18
0101011 43 */

function checkInput() {
  while (true) {
    let input = prompt("Input binary number, please!(example: 01001101)", "");
    let str = "01";
    let isCorrect = true;
    for (let char of input) {
      if (!str.includes(char)) {
        isCorrect = false;
        break;
      }
    }
    if (isCorrect) {
      return input;
    } else {
      return checkInput();
    }
  }
}

function convertBaseTwoToBaseTen(binaryNum) {
  let baseTenNumber = 0;

  let i = binaryNum.length - 1;
  // from back to front: 110 = (0 * pow(2, 0)) + (1 * pow(2, 1)) + (1 * pow(2, 2))
  while (i >= 0) {
    baseTenNumber +=
      Number(binaryNum[i]) * Math.pow(2, binaryNum.length - i - 1);
    --i;
  }
  return baseTenNumber;
}
let input = checkInput();
alert(convertBaseTwoToBaseTen(input));
