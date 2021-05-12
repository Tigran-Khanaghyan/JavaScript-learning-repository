"use strict";

/*- Given an array, return a new array that only includes the numbers.
``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166] */

function filterNumbers(array) {
  return array.filter((item) => typeof item === "number" && Number(item));
}

/* - Write a function which remove users with language equals to 'ru'.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
]; */
function filterUsers(array) {
  return array.filter((item) => item.lang !== "ru");
} // [{ username: "Nil Armstrong, lang: "ENG" }]

/*- Write a function which filters object by field.
``` javascript

filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
}] */

function filterByField(array, str) {
  return array.filter((item) => item[str]);
}

let arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

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

const users1 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
//return value: [1, 2, 55, 166]
console.log(filterNumbers(arr));
// return value: // [{ username: "Nil Armstrong, lang: "ENG" }]
console.log(filterUsers(users));
//return value: // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }
//                  { username: "Nil Armstrong, lang: "ENG", isAstronaut: true}]
console.log(filterByField(users1, "isAstronaut"));
