function selectionSort(arr) {

    for(let i = arr.length - 1; i >= 0; --i){
        let maxIndex = i  
        for(let j = 0; j < i; ++j){
            if(arr[maxIndex] < arr[j]){
                maxIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[maxIndex]
        arr[maxIndex] = temp
 
    }
}
let arr = [5, 6, -1, 7, 0]
selectionSort(arr)
console.log(arr)
