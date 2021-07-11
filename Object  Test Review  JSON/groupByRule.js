"use strict";

/*Write function that will group by some rule

groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
groupBy(["one", "two", "three"], (i) => i.length);
// => { '3': ['one', 'two'], '5': ['three'] */

let arr = [6.1, 4.2, 6.3, 6.7, 6.8];

function groupBy(arr, fn) {
  let result = arr.reduce((acc, item) => {
    let fnResult = fn(item);
    if (acc.hasOwnProperty(fnResult)) {
      acc[fnResult].push(item);
    } else {
      acc[fnResult] = [item];
    }
    return acc;
  }, {});

  return result;
}

console.log(groupBy(arr, Math.floor));
