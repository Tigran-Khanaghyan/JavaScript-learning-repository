"use strict";

/*Write a function that implements filtering in array */

function filterFalsyValues(arr) {
  let filterArray = function () {
    let newArray = [];

    for (let item of arr) {
      if (item) {
        newArray.push(item);
      }
    }
    return newArray;
  };
  return filterArray();
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values)); // [true, {}, { name: "Elon" }];
console.log(filterFalsyValues(["hello", 1233, []])); // ['hello', 1233, []]
