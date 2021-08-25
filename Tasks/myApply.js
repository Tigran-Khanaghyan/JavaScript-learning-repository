let person = {
    name: "Tigran"
}
function print(age, tel) {
    console.log(this.name, age, tel)
}

function myApply(fn, context, arr) {
    let uniqueId = Date.now()
    context[uniqueId] = fn
    let result = context[uniqueId](...arr)
    delete context[uniqueId]
    return result
}

myApply(print, person, [34, 095363530])