"use strict";

/*Write function that will zip arrays into object

zipObject(["a", "b", "c"], [1, 2]);
// => { 'a': 1, 'b': 2, c: null } */

let keys = ["a", "b", "c"];
let values = [1, 2];
function zipArrays(keys, values) {
  let objectBase = keys.map((item, index) => {
    if (values[index]) {
      return [item, values[index]];
    }
    return [item, null];
  });

  return objectBase.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
}

console.log(zipArrays(keys, values));
