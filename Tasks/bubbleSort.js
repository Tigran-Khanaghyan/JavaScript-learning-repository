function bubbleSort(arr) {
    for(let i = 0; i < arr.length; ++i){
        for(let j = 0; j < arr.length - i; ++j){
            if(arr[j] < arr[j + 1]){
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
}
let arr = [5, 6, -1, 7, 0]
bubbleSort(arr)
console.log(arr)
