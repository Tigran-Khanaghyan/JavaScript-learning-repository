"use strict";

function reduce(array, fn, initialValue) {
  let acc = initialValue !== undefined ? initialValue : array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    acc = fn(acc, element, index, array);
  }
  return acc;
}

let users = [
  { id: 1, name: "Tigran" },
  { id: 2, name: "Davit" },
  { id: 3, name: "Mariam" },
];

let myReduce = reduce(
  users,
  (initialValue, item) => (initialValue += item.id),
  0
);
let jsReduce = users.reduce((sum, item) => (sum += item.id), 0);

console.log(myReduce);
console.log(jsReduce);
