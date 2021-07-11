"use strict";

//Write a function ucFirst(str) that returns the string str with the uppercased first character

function ucFirst(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

console.log(ucFirst("john"));
