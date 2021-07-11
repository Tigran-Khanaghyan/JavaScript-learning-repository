"use strict";

//Write an object with field name.

const obj = {
  _name: [], // ['name', length][]
};

Object.defineProperty(obj, "name", {
  enumerable: true,
  configurable: true,

  set(value) {
    return obj.name.push(
      value.split(", ").map((item) => [item.trim(), item.length + 2])
    );
  },
  get() {
    return obj._name;
  },
});

console.log(obj.name);
obj.name = "Vrezh, Artavazd";
console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]
