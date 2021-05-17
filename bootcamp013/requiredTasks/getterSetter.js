"use strict";

//Write an object with getter/setter field name.

const obj = {
  _name: [], // ['name', length][]
  set name(value) {
    return obj.name.push(
      value.split(", ").map((item) => [item.trim(), item.length + 2])
    );
  },
  get name() {
    return obj._name;
  },
};

console.log(obj.name);
obj.name = "Vrezh, Artavazd";
console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]
