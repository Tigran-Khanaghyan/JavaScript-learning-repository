function myMap(arr, cb) {
    let newArr = []
    for(let i = 0; i < arr.length; ++i){
        newArr.push(cb(arr[i], i, arr))
   }
   return newArr
}

let arr = [1, 2, 3, 4]
console.log(myMap(arr, (item) => item * 2))