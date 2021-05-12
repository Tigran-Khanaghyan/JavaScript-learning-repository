"use strict";

/*- Write a function which returns array of usernames.
``` javascript

getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong'] */

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames(array) {
  return array.map((item) => item.username);
}

/*```
- Write a function which returns array of lengths of user names

``` javascript

getUsernameLengths(users); // [12, 13] */

const users1 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNamesLengths(array) {
  return array.map((item) => item.username.length);
}

/*- Write a function which parses string integers. If it's not possible to
parse, then add null

``` javascript
parseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323]; */

function parseInteger(array) {
  let numbers = [];
  numbers = array.map((item) => {
    if (isNaN(parseInt(item))) {
      return null;
    }
    return parseInt(item);
  });
  return numbers;
}

console.log(getUserNames(users));
console.log(getUserNamesLengths(users1));
console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];);
console.log(parseInteger(["1", "px", "2323"]));
