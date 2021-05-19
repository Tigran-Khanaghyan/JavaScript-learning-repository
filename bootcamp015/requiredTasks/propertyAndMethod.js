"use strict";

/*const user = { name: "Vrezh" };
console.log(user.isHuman); // ??? true ??? */

/************************************************/
/*
const person = { isHuman: true };
const user = { name: "Vrezh", __proto__: person };
console.log(user.isHuman); // true */

/**************************************************/
/*
const person = { isHuman: true };
const chewbacca = { isHuman: false, __proto__: person };
console.log(chewbacca.isHuman); //false */

/*****************************************************/
/*
const person = { isHuman: true };
const user = { name: "Vrezh", __proto__: person };
console.log(user.hasOwnProperty("isHuman")); // false
console.log(person.hasOwnProperty("isHuman")); // true */

/**********************************************************/
/*
const person = { isHuman: true };
const chewbacca = { isHuman: false, __proto__: person };
console.log(chewbacca.hasOwnProperty("isHuman")); // true
console.log(person.hasOwnProperty("isHuman")); // true */

/**********************************************************/

/*const person = { isHuman: true };
const user = { name: "Vrezh", __proto__: person };
user.isHuman = false;
console.log(person.isHuman);
console.log(user.isHuman); */

/**********************************************************/

/*const user = { name: "Vrezh" };
console.log(user.__proto__);   */

/***********************************************************/

/*const user = { name: "Vrezh", __proto__: null };
console.log(user.__proto__); */

/*********************************************************/
/*
const person = {
  isHuman: true,
  hasAge: true,
};
const user1 = { name: "Elon", __proto__: person };
const user2 = { name: "Adele", __proto__: person };
user1.__proto__.isHuman = false;
console.log(user1.isHuman);
console.log(user2.isHuman); 
console.log(person.isHuman)   */

/*************************************************************/

/*const Human = {
  isHuman: true,
  hasBrain: () => (Math.random() > 0.9 ? true : false),

  breath: () => {
    if (Math.random() > 0.8) {
      console.log("breath");
    } else {
      console.log("😴 ");
    }
  },
};
const User = {
  __proto__: Human,
  name: "John",
  surname: "Doe",
  getFullName: () => `${User.name} ${User.surname}`,
};
const Programmer = {
  __proto__: User,
  code: () => {
    if (Math.random() > 0.2) {
      console.log("shit code");
    } else {
      console.log("code that still smells");
    }
  },
};
Programmer.breath(); // => OUTPUT: */

/***********************************************************/

/*const car = {
  engine: () => {
    return console.log("Drive!");
  },
};
const bmw = Object.create(car);
const lada = {
  // code
  __proto__: car,
};
bmw.engine(); // => OUTPUT:
lada.engine(); // => OUTPUT:
// code
bmw.engine = () => {
  console.log("Fast Drive!");
};

bmw.engine(); // => OUTPUT:
lada.engine(); // => OUTPUT:
car.engine()
lada.engine = () => {
    console.log('Crazy!')
}
lada.engine()
bmw.engine()
car.engine()
 */
