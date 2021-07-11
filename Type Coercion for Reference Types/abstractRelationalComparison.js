'use strict'

/**
 * 1. Calls [[ToPrimitive]] for both arguments
 * 2. if both strings => lexicographic
 * 3. calls [[ToNumber]] on both
 * 
 * [[ToPrimitive]]
 *    1. valueOf() -> if returns primitive type => stop and return
 *    2. toString() -> if returns primitive type => strop and return
 *    3. Error
 */

// const obj = {}

// obj.valueOf = () => {
//   return {}
// }

// obj.toString = () => {
//   return 22
// }

// console.log(obj >= 22)


const obj = {}

obj.valueOf = () => {
  return {}
}

obj.toString = () => {
  return 22
}

const user = {}

user.valueOf = () => {
  return 20
}

user.toString = () => {
  return 22
}


console.log(obj == user) // 22 20