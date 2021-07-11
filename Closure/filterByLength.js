"use strict";

/*Write a function which remove elements with length <= 3 */

function filterByLength(arr) {
  let makeNewArray = function () {
    let newArray = [];
    for (let item of arr) {
      if (item.length > 3) {
        newArray.push(item);
      }
    }
    return newArray;
  };
  return makeNewArray();
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ['tesla','mercedes']
