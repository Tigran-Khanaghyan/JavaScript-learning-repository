"use strict";

function repeat(str, n) {
  let newStr = "";
  for (let i = 0; i < n; ++i) {
    newStr += str;
  }
  return newStr;
}

console.log(repeat("*", 3));
