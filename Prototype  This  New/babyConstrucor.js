"use strict";

/*Write a Baby constructor subclassing Person.
Besides name and age, Baby takes a third argument to initialize favoriteToy.
Besides the methods on Person.prototype, babies have the ability to .play():
Should return a string "Playing with x", x being the favorite toy. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
}

Baby.prototype.play = function () {
  console.log(`${this.name} playing with ${this.favoriteToy}`);
};

let baby = new Baby("Tigran", 30, "Computer");
baby.play();
