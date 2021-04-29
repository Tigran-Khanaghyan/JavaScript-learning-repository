'use strict'

/*Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1 )
Input Output
5 “5! = 120”
1 “1! = 1”
7 “7! = 5040” */

let a = 5;
let factorial = 1

for(let i = 2; i <= 5; ++i){
    factorial *= i;
}

console.log(factorial)