"use strict";

/*Write a function that returns an anonymous function,
 which transforms its input by adding a particular suffix at the end.
 */

function addSuffix(str) {
  return (outerStr) => outerStr + str;
}

let addLy = addSuffix("ly");
console.log(addLy("hopeless")); // "hopelessly"
console.log(addLy("total")); // "totally"
let addLess = addSuffix("less");
console.log(addLess("fear")); // "fearless"
console.log(addLess("ruth")); // "ruthless"
