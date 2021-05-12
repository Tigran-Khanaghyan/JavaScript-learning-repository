"use strict";

/*- Given an array, return the sum of numbers that are 18 or over.
``` javascript
const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
```
- Write a function which calculates average age of users.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
age: 56,
},
{
username: "Nil Armstrong",
lang: "ENG",
age: 54,
},
];
getAverageAge(users); // 55 */

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

function sumOver18(arr) {
  return arr.reduce((sum, item) => {
    if (item >= 18) {
      sum += item;
      return sum;
    }
    return sum;
  }, 0);
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(array) {
  let sum = users.reduce((sum, item) => (sum += item.age), 0);
  return sum / array.length;
}

console.log(getAverageAge(users));
console.log(sumOver18(arr)); // 1347
