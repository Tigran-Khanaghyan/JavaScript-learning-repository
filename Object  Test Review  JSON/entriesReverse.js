"use strict";

/*Write function that will do reverse operation for Object.entries

fromPairs([
["a", 1],
["b", 2],
]);
// => { 'a': 1, 'b': 2 } */

let array = [
  ["a", 1],
  ["b", 2],
];

function entriesRevers(array) {
  return (array = array.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {}));
}

console.log(entriesRevers(array));
