let person = {
    name: "Tigran"
}
function print(age, tel) {
    console.log(this.name, age, tel)
}

// print.bind(person, 34)(095363530)

function myBind(fn, context, ...rest) {
    return function(...args) {
  let uniqueId = Date.now()
    context[uniqueId] = fn
    let result = context[uniqueId](...rest, ...args)
    delete context[uniqueId]
    return result
    }
}

myBind(print, person, 34)(095363530)