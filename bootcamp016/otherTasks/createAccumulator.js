"use strict";

/*Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code: */

function Accumulator(startingValue) {
  //this.starting = startingValue
  this.value = startingValue;
  this.read = function (a) {
    this.value = this.value + a;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(2); // adds the user-entered value
accumulator.read(3); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values
