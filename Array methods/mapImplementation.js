"use strict";

function map(array, fn) {
  let mappedArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let fnValue = fn(element, index, array);
    mappedArray.push(fnValue);
  }
  return mappedArray;
}

let users = [
  { id: 1, name: "Tigran" },
  { id: 2, name: "Davit" },
  { id: 3, name: "Mariam" },
];

function fn(item) {
  return item.name;
}

let mappedArray = map(users, fn);
console.log(mappedArray);
