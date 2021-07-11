/*function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
var me = {
  name: "Kyle",
};
var you = {
  name: "Reader",
};
//identify.call(me); // KYLE
//identify.call(you); // READER
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER
 */

/***********************************************/

/*function foo(){
    console.log(this.a)
}

var obj1 = {
    a: 42,
    foo
}

var a = "I am a global Object property"

var baz = obj1.foo
baz() */

/*****************************************************/

function foo(...args) {
  this.value = 0;
  for (let item of args) {
    this.value += item;
  }
}

let obj = {};
foo.apply(obj, [1, 2, 3]);
console.log(obj.value);
