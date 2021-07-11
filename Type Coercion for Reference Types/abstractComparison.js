"use strict";

/**
 * 1. String Number
 * x - string | number
 * y - object
 * x == ToPrimitive(y)
 * [[ToPrimitive]]
 *    1. valueOf() -> if returns primitive type => stop and return
 *    2. toString() -> if returns primitive type => stop and return
 *    3. Error
 */

const obj = {
  a: 1,
  b: "vrezh",
  valueOf() {
    return 332;
  },
  toString() {
    return "[object Object]";
  },
};

//console.log(Number(obj))
//    console.log(obj == '[object Object]')
//    console.log(obj == 332); //'332' == 332 => 332 == 332
//    console.log(obj == 22)

const arr = [1, 2, 3];

arr.valueOf = () => 12;
arr.toString = () => "1, 2, 3";

console.log(String(arr));

console.log(arr == "1,2,3");
console.log(arr == "[1,2,3]");
console.log(arr == 12);

/*
 * 2. Boolean
 * Reference types always true
 */

// const empty = {}
// console.log(!!empty)

const fn = () => {};

console.log(String(fn));
