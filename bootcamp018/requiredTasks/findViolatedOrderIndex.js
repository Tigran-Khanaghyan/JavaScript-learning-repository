"use strict";

/*Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated. */

function findIndex(arr){

    function iter (iArr){
        const[first, second, ...rest] = iArr
        if(iArr.length === 0){
            return -1
        }
        if(first > second){
            return arr.indexOf(second)
        }
        return iter(rest)

    }
    return iter(arr)
}

let arr = [-9, -4, -4, 3, 12];
console.log(findIndex(arr))

