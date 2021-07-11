"use strict";

/*Given an object. Invert it (keys become values and values become keys).
 If there is more than key for that given value create an array.
 Input Output
{ a: ‘1ʼ, b: ‘2ʼ } { 1: ‘aʼ, 2: ‘bʼ }
{ a: ‘1ʼ, b: ‘2ʼ, c: ‘2ʼ } { 1: ‘aʼ, 2: [‘bʼ, ‘cʼ] }
{ a: ‘1ʼ, b: ‘2ʼ, c: ‘2ʼ, d: ‘2ʼ } { 1: ‘aʼ, 2: [‘bʼ, ‘cʼ, ‘dʼ] } */

function invertObject(obj) {
  let invertedObj = {};
  for (let key in obj) {
    let tempKey = obj[key];
    if (tempKey in invertedObj) {
      if (Array.isArray(invertedObj[tempKey])) {
        invertedObj[tempKey].push(key);
      } else {
        let tempValue = invertedObj[tempKey];
        delete invertedObj[tempKey];
        invertedObj[tempKey] = [tempValue, key];
      }
    } else {
      invertedObj[tempKey] = key;
    }
  }
  return invertedObj;
}

let obj = { a: "1", b: "2", c: "2", d: "2" };

console.log(invertObject(obj));
