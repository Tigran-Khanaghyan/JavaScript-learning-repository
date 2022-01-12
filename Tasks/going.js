function going(n) {
    let acc = 1
    let res = 1

    for(let i = 0; i < n - 1; ++i){
        acc = acc / (n - i)
        res = res + acc
    }

    return Math.floor(res * 1e6) / 1e6
}

console.log(going(5))