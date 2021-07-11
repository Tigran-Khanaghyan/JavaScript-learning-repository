"use strict";

function lowerFirst(str) {
  let newStr = str[0].toLowerCase() + str.slice(1);
  return newStr;
}

console.log(lowerFirst("FRED"));
