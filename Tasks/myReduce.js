function myReduce(array, cb, initialValue) {
    let accumulator = initialValue
    for(let i = 0; i < array.length; ++i){
       accumulator = cb(accumulator, array[i], i, array)
    }
    return accumulator
}

let arr = [1, 2, 3, 4]

console.log(myReduce(arr, ((a, b) => {
    return {...a, [b]:b}
}), {}))
