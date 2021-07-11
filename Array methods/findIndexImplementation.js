"use strict";

function findIndex(array, fn) {
  let fnResult = true;
  for (let index = 0; index < array.length; ++index) {
    let element = array[index];
    fnResult = fn(element, index, array);
    if (fnResult) {
      return index;
    }
  }
  return -1;
}

let users = [
  { id: 1, name: "Tigran" },
  { id: 2, name: "Davit" },
  { id: 3, name: "Mariam" },
];

function fn(item) {
  if (item.id === 11) {
    return true;
  }
  return false;
}

console.log(findIndex(users, fn));
