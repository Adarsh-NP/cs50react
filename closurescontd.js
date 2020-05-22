// function makefunction () {
//     const message = 'hello'
//     function sayHello() {
//         console.log(message)
//     }
//     return sayHello
// }

// const sayHello = makefunction()
// console.log('typeof message:', typeof message)
// console.log(sayHello.toString())
// sayHello() 
// copied from previous example

//anothr way

const sayHello = (function(){
    var message = 'Hello'
    function sayHello(){
        console.log(message)
    }
    return sayHello
})()

console.log('typeof message:', typeof message)
console.log(sayHello.toString())
sayHello()

const counter = (function() {
    let count =0
    return {
        inc: function(){count++},
        get: function(){console.log(count)}
    }
})()
counter.inc()
counter.get()
//no one has access to count variable declared in the function except that function itself

//solving the buggy problem with makeFunctionArray
function makeFunctionArray() {
    const arr = []
    for(var i = 0; i<5; i++){
        arr.push((function (i) {
           return function(){console.log(i)}
    })(i))
} 

return arr
}
const functionArr =  makeFunctionArray()

functionArr[0]()

//first class functions

//execute this in node or use console.log to print

const x = [0, 1, 2, 3]
function addOne(number) {
    return number++
}
addOne(1)
x.map(addOne)

function isgreaterthanone(num) {
    return num > 1
}
isgreaterthanone(100)
x.filter(isgreaterthanone)
//returns 2 and 3 back

//reduce 
function add(x, y) {return x + y}
x.reduce(add)
//returns the sum

//higher order functions
function map(arr, fn){
    const newArr = []
    arr.forEach(function(val){
        newArr.push(fn(val))
    })

    // for (let i=0; i<arr.length; i++){
    //     let val = arr[i]
    //     newArr.push(fn(val))
    // }

    return newArr
}

function addOne(num) {
    return ++num
}
console.log(map(x, addOne))
console.log(x.map(addOne))

//asynch functions in js

function printone() {
    console.log('one')
}
function printtwo() {
    console.log('two')
}
function printthree() {
    console.log('three')
}
setTimeout(printone, 1000 )
setTimeout(printtwo, 0)
printthree()
