"use strict";

/*Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. */

function sumOfDigit(n) {
  function iter(num, sum) {
    if (num < 10 && sum < 10) {
      return num % 10;
    }
    if (num < 10 && sum > 10) {
      num = sum;
      return iter(num, 0);
    }
    sum += num % 10;
    return iter(Math.floor(num / 10), sum);
  }
  return iter(n, 0);
}

let n = 999999999999;
console.log(sumOfDigit(n));
