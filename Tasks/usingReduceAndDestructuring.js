"use strict";

let user = {
  name: "Tigran",
  age: 30,
  email_1: "hay.mail91@gmail.com",
  email_2: "arm.mail1991@gmail.com",
};

function makeArrayFromEmails(obj) {
  //make array of arrays insight object keys and values
  let arr = [];
  for (let key in obj) {
    let tempArr = [];
    tempArr.push(key, obj[key]);
    arr.push(tempArr);
  }
  //collecting all emails in one array with reduce
  let emails = [];
  arr = arr.reduce((acc, item) => {
    if (typeof item[1] === "string" && item[1].includes("@")) {
      emails.push(item[1]);
      return [...acc, ["emails", [...emails]]];
    }
    return [...acc, item];
  }, []);
  // make object from new array and return it
  arr = arr.reduce((acc, item) => {
    let key = item[0];
    let value = item[1];
    let newItem = { [key]: value };
    return { ...acc, ...newItem };
  }, {});
  return arr;
}

console.log(makeArrayFromEmails(user));
