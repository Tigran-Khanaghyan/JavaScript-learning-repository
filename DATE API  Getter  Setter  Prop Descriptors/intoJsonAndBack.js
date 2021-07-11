"use strict";

//Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35,
};

let jsonFromUser = JSON.stringify(user);

let parsedUser = JSON.parse(jsonFromUser);

console.log(typeof parsedUser, parsedUser);
