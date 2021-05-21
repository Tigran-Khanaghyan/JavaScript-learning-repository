"use strict";

/*We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit? */

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

//Rabbit object receives the full property
/*That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit. */

console.log(rabbit.full);
console.log(animal.full);
