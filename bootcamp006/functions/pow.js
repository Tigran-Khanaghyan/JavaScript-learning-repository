"use strict";

/*Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result. */

function pow(x, n) {
  for (let i = 1; i < n; ++i) {
    x *= x;
  }
  return x;
}

console.log(pow(3, 3));
