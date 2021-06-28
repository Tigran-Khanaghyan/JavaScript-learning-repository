'use strict'

let url = 'https://jsonplaceholder.typicode.com/users'
let methodGet = 'GET'
let methodPost = 'POST'

let body = {
    name: 'Tigran',
    age: 30
}

function sendRequest(method, url, body = null){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response)
            }else {
                resolve(xhr.response)
            }
        }

        xhr.send(JSON.stringify(body))
    })
}

sendRequest(methodGet, url)
    .then(data => console.log(data))
    .catch(error => console.log(error))

sendRequest(methodPost, url, body)
    .then(data => console.log(data))
    .catch(error => console.log(error))    