"use strict";

/*Create a function printAfter that calls its argument after printing hello world */

function printAfter(fn) {
  console.log("hello, world");
  return fn();
}

const print = () => console.log("Elon Musk");
console.log(printAfter(print));
// 'hello, world'
// 'Elon Musk'
