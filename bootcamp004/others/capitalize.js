"use strict";

function capitalize(str) {
  str = str.toLowerCase();
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

console.log(capitalize("AHJFKFKF"));
