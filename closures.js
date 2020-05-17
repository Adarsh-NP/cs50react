//closures cont
//the functions have access to variables that are defined and retain the 
//ability to use variables declared by a parent function even after that function has disappeared
let i = 55 //the function will bind to the i that is more specific that is the one inside it
function makeFunctionArray() {
    const arr = []
    for(var i = 0; i<5; i++){
        arr.push(function (){console.log(i)})
    } //had it been let i it would have ended here
    //here the value of i is 5 
    return arr
} //here var ends
//damn its really weird
const arrey = makeFunctionArray()
//console.log(i) //i is undefined
arrey[0]() //it has the functin console.log(i) and the value of i is 5 
//had it been let, it would work as expected
//what is this behaviour lol

//closure is  a function that has variables that have already left the scope


function makefunction () {
    const message = 'hello'
    function sayHello() {
        console.log(message)
    }
    return sayHello
}

const sayHello = makefunction()
//console.log(message) //because message wasn't defined in this scope
sayHello()

console.log('typeof message:', typeof message)
console.log(sayHello.toString())
sayHello() 

//we see that type of message is undefined yet sayHello is able to print the message,
// it was because within scope when the function was created

//alternative method of creating a closure Immediately invoked function expression




