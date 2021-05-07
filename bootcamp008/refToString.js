'use strict'

/**
 * 1. string case
 *   - toString()
 * 2. number case
 *   - valueOf()
 */ 

 const user = {};
 const numbers = []
 // user.valueOf = () => 12
 
 //console.log(String(user))
 // console.log(Number(user))
 
 const obj = {
   valueOf() {
     return 22
   },
   toString() {
     return '332'
   }
 };
 const obj1 = {
   
    toString() {
      return '332'
    }
  };
  const obj2 = {
    valueOf() {
      return 22
    },
  };
 
//  console.log(String(obj1))
//  console.log(Number(obj1)) 
 const arr = [1, 2, 3];
 
 arr.valueOf = () => 12
 arr.toString = () => '1, 2, 3'
 
 console.log(String(arr));
 console.log(Number(arr))