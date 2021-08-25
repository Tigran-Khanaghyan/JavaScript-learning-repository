let person = {
    name: "Tigran"
}
function print(age, tel) {
    console.log(this.name, age, tel)
}

function myCall(fn, context, ...rest) {
    let uniqueId = Date.now()
    context[uniqueId] = fn
    let result = context[uniqueId](...rest)
    delete context[uniqueId]
    return result
}

myCall(print, person, 34, 095363530)

