"use strict";

/*Given two objects. Write a function that performs shallow compare.
Input Output
let a = { a: ‘1ʼ };
let b = { a: ‘1ʼ};
shallowCompare(a, b)
true

let a = { a: ‘1ʼ };
let b = { a: ‘1ʼ, b: ‘2ʼ };
shallowCompare(a, b)
false

let a = { };
let b = { };
shallowCompare(a, b)
true */

function shallowCompare(obj1, obj2) {
  let isEqual1 = true;
  let isEqual2 = true;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      isEqual1 = false;
      break;
    }
  }
  for (let key in obj2) {
    if (obj2[key] !== obj1[key]) {
      isEqual2 = false;
      break;
    }
  }
  if (isEqual1 && isEqual2) {
    return true;
  } else {
    return false;
  }
}

let a = {};
let b = {};

console.log(shallowCompare(a, b));
