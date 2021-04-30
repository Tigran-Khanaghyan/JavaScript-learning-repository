"use strict";

function kebabCase(str) {
  while (str.includes(" ")) {
    if (str[0] === " ") {
      str = str.replace(" ", "");
      str = str.toLowerCase();
    } else if (str[str.length - 1] === " ") {
      str = str.replace(" ", "");
      str = str.toLowerCase();
    } else {
      str = str.replace(" ", "-");
      str = str.toLowerCase();
    }
  }

  for (let i = 0; i < str.length; ++i) {
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (capitalLetters.includes(str[i]) && !str.includes("_")) {
      let char = str[i].toLowerCase();
      str = str.slice(0, i) + "-" + char + str.slice(i + 1);
    }
  }
  let strArr = str.split("_");
  let newArr = [];
  for (let element of strArr) {
    if (element !== "") {
      newArr.push(element);
    }
  }
  str = newArr.join("-");
  str = str.toLowerCase();

  return str;
}

console.log(kebabCase("fooBar"));
console.log(kebabCase("Foo Bar"));
console.log(kebabCase("__FOO_BAR__"));
