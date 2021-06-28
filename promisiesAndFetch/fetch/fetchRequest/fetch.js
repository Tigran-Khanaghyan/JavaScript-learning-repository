'use strict'

let url = 'https://jsonplaceholder.typicode.com/users'
let methodGet = 'GET'
let methodPost = 'POST'

let body = {
    name: 'Tigran',
    age: 30
}

function sendRequest(method, url, body = null){
    const headers = {
        'Content-type' : 'application/json'
    }
   if(method === 'POST'){
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => response.json())
   }
   return fetch(url).then(response => response.json())
}

sendRequest(methodGet, url)
    .then(data => console.log(data))
    .catch(error => console.log(error))
    
sendRequest(methodPost, url, body)
    .then(data => console.log(data))
    .catch(error => console.log(error))
