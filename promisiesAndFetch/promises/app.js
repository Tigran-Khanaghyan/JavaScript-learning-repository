'use strict'

function delay(ms) {

    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms)
    })
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));