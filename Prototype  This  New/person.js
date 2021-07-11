"use strict";

/*Create a method in the Person class which returns how another person's age compares. Given the instances
p1, p2 and p3, which will be initialised with the attributes name and age,return a sentence in the following
format:
{other person name} is {older than / younger than / the same age as} me. */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.compareAge = function (person) {
  if (this.age > person.age) {
    return `${person.name} is younger than me`;
  } else if (this.age < person.age) {
    return `${person.name} is older than me`;
  } else {
    return `${person.name} is the same age as me`;
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
console.log(p1.compareAge(p2)); //➞ "Joel is older than me."
console.log(p2.compareAge(p1)); //➞ "Samuel is younger than me."
console.log(p1.compareAge(p3)); //➞ "Lily is the same age as me."
