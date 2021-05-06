"use strict";

/*Write a function redundant that takes in a string str and returns a function that returns str. */

function redundant(str) {
  return () => str;
}

const f1 = redundant("apple");
console.log(f1());
//f1() ➞ "apple"
const f2 = redundant("pear");
console.log(f2());
//f2() ➞ "pear"
const f3 = redundant("");
console.log(f3());
//f3() ➞ ""
