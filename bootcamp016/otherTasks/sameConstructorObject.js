"use strict";

/*Imagine, we have an arbitrary object obj, created by a constructor 
function – we don’t know which one, but we’d like to create a new object using it.

Give an example of a constructor function for obj which lets such code work right. 
And an example that makes it work wrong.
*/

/*function User(name){
    this.name = name
}

let user = new User('Tigran')
let newUser = new user.constructor('Khanaghyan')
console.log(newUser.name) */

/***********************************WRONG CODE**************************************************/
/*
function User(name) {
  this.name = name;
}
User.prototype = {};
let user = new User("Tigran");

let user2 = new user.constructor("Khanaghyan");
console.log(user.__proto__.constructor);
console.log(user2.name);
 */

/*Why user2.name is undefined?

Here’s how new user.constructor('Pete') works:

First, it looks for constructor in user. Nothing.
Then it follows the prototype chain. The prototype of user is User.prototype, and it also has no constructor
 (because we “forgot” to set it right!).
Going further up the chain, User.prototype is a plain object, its prototype is the built-in Object.prototype.
Finally, for the built-in Object.prototype, there’s a built-in Object.prototype.constructor == Object. So it is used.
Finally, at the end, we have let user2 = new Object('Pete').

Probably, that’s not what we want. We’d like to create new User, not new Object. That’s the outcome of the missing constructor.

(Just in case you’re curious, the new Object(...) call converts its argument to an object. That’s a theoretical
 thing, in practice no one calls new Object with a 
value, and generally we don’t use new Object to make objects at all). */

let obj = new Object("Tigran");
console.log(obj);
