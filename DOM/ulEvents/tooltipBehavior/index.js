'use strict'

function foo(cb, val){
  console.log('foo', val)

  setTimeout(() => {
    if(val > 20){
      cb(val)
    }else {
      bar(val *2, foo.bind(null, cb))
    }
  })
}

function bar(val, cb){
  console.log('bar:', val)
  setTimeout(() => {cb(val - 1)})
}

foo((val) => {console.log('callback:', val)}, 10)