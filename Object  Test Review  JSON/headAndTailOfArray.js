"use strict";

/*Write functions that will return head and tail of Array

getHead([1, 2, 3]);
// => [1]
getTail([1, 2, 3]);
// => [2, 3] */

let arr = [1, 2, 3];

function getHead(arr) {
  let [a] = [...arr];
  return [a];
}

function getTail(arr) {
  let [, ...tail] = [...arr];
  return tail;
}

console.log(getHead(arr));
console.log(getTail(arr));
