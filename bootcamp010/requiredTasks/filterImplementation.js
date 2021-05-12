"use strict";

function filter(array, fn) {
  let filteredArray = [];
  for (let index = 0; index < array.length; ++index) {
    let element = array[index];
    let isTrue = fn(element, index, array);
    if (isTrue) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

let users = [
  { id: 1, name: "Tigran" },
  { id: 2, name: "Davit" },
  { id: 3, name: "Mariam" },
];

let newArray = filter(users, (item) => item.id == 1);
let newArrayJs = users.filter((item) => item.id == 1);
console.log(newArray);
console.log(newArrayJs);
