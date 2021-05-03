"use strict";

let str = "        0x77";
let numberStr = "";
let zero = false;

if (str === "") {
  console.log(NaN);
} else if (Number(str)) {
  numberStr = Math.floor(str);
} else {
  for (let char of str) {
    if (Number(char)) {
      numberStr += char;
    } else if (char === "0") {
      if (!numberStr) zero = true;
      if (numberStr) numberStr += char;
      else continue;
    } else if (char === " ") {
      if (zero && !numberStr) {
        numberStr = "0";
        break;
      }
      continue;
    } else {
      break;
    }
  }
}
if (numberStr) console.log(numberStr);
else if (numberStr === 0) console.log(0);
else console.log(NaN);
 

