"use strict";

//Write a recursive function to determine whether all digits of the number are odd or not.

function checkDigits(n) {
  if (n % 2 === 0 && n !== 0) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  // console.log(n)
  return checkDigits(Math.floor(n / 10));
}

console.log(checkDigits(111332));
