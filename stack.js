//call stack: functions that get invoked by other functions are added to call stack
function a() {
    console.log(a)
}
function b(){
    a()
}
function c(){
    b()
}

c()


//asynch js

//memory overflow that will overflow the queue

// function recurse(){
//     console.log('recurse')
//     return recurse()
// }

//recurse()
//callbacks- control of flow with asynchronous calls

function doSomething(callback) {
    callback(1)
}
doSomething(console.log) //prints 1

//what if this was asynch

function doSomethingAsynch(callback) {
    setTimeout(function(){callback(1)}, 1000)
}

doSomethingAsynch(console.log)


//Promises'
//this: refers to an object thats set at the creation of a new execution context or
// function execution or a stack frame in a stack 
//if a function is called as an method of an object this gets bound to the object the function was called on
const person = {
    name: 'jordan',
    greet: function (){console.log(`hello ${this.name}`)}
}
person.greet() //this gets bound to person

const greet = person.greet
greet() //returns hello undefined as greet is global object that has no name attribute
//but
const student = {
    name: 'Adarsh',
}
student.greet = person.greet //this here is attached to student class now
student.greet()

const greetSomebody = function(name){
    this.name = name,
    console.log(`Hello ${this.name}`)
}

greetSomebody('Adarsh')

//bind call and apply
const greetagain = person.greet.bind({name: 'this is a bound object'})
greetagain()
person.greet.call({name: 'this is a bound object'})
person.greet.apply({name: 'this is a bound object'})

const newPerson = {
    name: 'NewPerson',
    greet: () => {console.log(`Hello ${this.name}`)}
}
newPerson.greet() //why is this undefined here??
//arrow function will bind this to be whatever this is at the time we declare the function rather than when we invoke the funciton.
// Unlike regular functions, Arrow functions does not have a 
//this of their own, only regular functions and global scope 
//have this of their own.

// Which would mean that whenever this would be referred in 
//arrow function, it will start looking up the scope to find 
//the value of this, or in this case, during lookup it found, 
//that the object is not having a this of its own, hence, it 
//went up to global scope and bound the value of this with 
//global scope, where it won't find anything. 