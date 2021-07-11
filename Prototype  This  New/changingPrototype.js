"use strict";

/*In the code below we create new Rabbit, and then try to modify its prototype.

In the start, we have this code: */

/*function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

/*The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones. */

/**************************************************************************************************************************/

//We added one more string (emphasized). What will alert show now?
/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // 

false.

Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, 
it’s still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.

So when we change its content through one reference, it is visible through the other one.

/******************************************************************************************************/

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // //true */

//All delete operations are applied directly to the object.
// Here delete rabbit.eats tries to remove eats property from rabbit,
// but it doesn’t have it. So the operation won’t have any effect.

/*****************************************************************************************************************/

/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // undefined
 */

//undefined.

//The property eats is deleted from the prototype, it doesn’t exist any more.

/***************************************************************************************************************/
