"use strict";

function some(array, fn) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let isTrue = fn(element, index, array);
    if (isTrue) {
      return true;
    }
  }
  return false;
}

let users = [
  { id: 1, name: "Tigran" },
  { id: 2, name: "Davit" },
  { id: 3, name: "Mariam" },
];

let isSomeTrueMy = some(users, (item) => item.id > 2);
let isSomeTrueJs = users.some((item) => item.id > 2);
console.log(isSomeTrueMy);
console.log(isSomeTrueJs);
