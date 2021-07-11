"use strict";

/**
 * https://github.com/vre2h/test-force/tree/master/gtu-02
 *
 * 1. Calls [[ToPrimitive]] for both arguments
 * 2. if both strings => lexicographic
 * 3. calls [[ToNumber]] on both
 *
 * [[ToPrimitive]]
 *    1. valueOf() -> if returns primitive type => stop and return
 *    2. toString() -> if returns primitive type => strop and return
 *    3. Error
 */

const user = {
  valueOf() {
    return 44;
  },
  toString() {
    return [1, 2, 3];
  },
};

const anotherUser = {
  valueOf() {
    return { name: "user" };
  },
  toString() {
    return 44;
  },
};

console.log(user >= anotherUser); // 44 >= 44
const user2 = {};
const user1 = {};

console.log(user2 == user1);
console.log(user2 === user1);
