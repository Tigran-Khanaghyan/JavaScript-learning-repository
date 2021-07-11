"use strict";

function every(array, fn) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let isTrue = fn(element, index, array);
    if (isTrue === false) {
      return false;
    }
  }
  return true;
}

let users = [
  { id: 1, name: "Tigran" },
  { id: 2, name: "Davit" },
  { id: 3, name: "Mariam" },
];

let isEveryTrueMy = every(users, (item) => item.id > 1);
let isEveryTrueJs = users.every((item) => item.id > 1);
console.log(isEveryTrueMy);
console.log(isEveryTrueJs);
