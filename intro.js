const first_name = 'Adarsh';
const last_name = 'Narayan'
//no difference between double and single quotes with semicolon being optional


const val = 42
const arr = [
    'string',
    42,
    function(){console.log('hi')}
]

//we can optionally have comma after the last element in the array
//even the commas optional but the midde ones have to be there
arr[2]() //ommitting the () won't print the value to the output and will not print anything for this line
//executing the function 

for (let i=0; i<  arr.length; i++){
    console.log(arr[i])
}

//console.log turns the value of any variable to a string to console.log them

//Typecasting
//coercion
//implicit vs explicit
const x = 42  //you cannot change the value of a variable declared with const later
const explicit = String(x);
const implicit = x + "";
//comparing the variables
// == coerces, === has to have the same type
//avoid using double equals as this even equates {} to False
const y = 42
console.log(typeof y)
typeof null  //object 
//falsy value is any value that that's bool false
//undefined, null, false, NaN, +0, 0 , -0, ""
//truthy are {}, [], everything else

//Primitives vs Objects
//storing by reference, changing the value without changing the location 
//objects are mutable as in without changing the adress their values can be changes

const o = new Object()
o.first_name = "Adarsh"
o.last_name = "Pandey"
o.greet  = function() {
    console.log('hi'+o.first_name+o.last_name)
}

//another way

const o2 = {}
o.first_name = 'Adarsh'
o['last_name'] = 'P'
const key = "is_Learning"
o[key] = true
o.greet = function() {
    console.log('hi')
}

const o3 = {
    1: 'test',
    first_name: 'Adarsh',  //anything on the key of the key value pair here is treated as a string
    last_name: 'Narayan',
    is_Learning: true,
    greet: function() {
        console.log('hi')
    },
    address: {
        street: 'XYZ',  //address being object within an object, sounds like json this notation doesn't it :P
        number: '123'
    }
}

object1 = o3
object1.greet()
console.log(object1.address['number'])
o3.address.number //also works with console.log to output on the terminal
console.log(o3[1]) //returns undefined, thats because there's no key named one, tricked :P

const object2 = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

onew = object2
object2.a = 'c'
console.log(object2.a) //prints c instead of a, surprise much XD 
//this is because object and object2 are pointing to the same memory location
//changing the val of object2 still the output will be same as the previous one

const object3 = Object.assign({}, object2)
//asks for a brand new object {}, and merges its keys and values with that of object1
object2.a = "hello"
console.log(object3.a) //notice the difference as compared to the previous ones

//But 
object3.obj.key = "hey"
console.log(object2.obj.key) //it changed the value, this is called shallow copying 

//cloning deep ? 
//use a library, or lets implement XD

//function to deep copy object 
function deepCopy(obj) {
    //check if the values are objects
    //if so, copy that object (deep copy)
    //else return the value
    const keys = Object.keys(obj)
    const newObject = {}
    for(let i=0; i<keys.length; i++){
        const key = keys[i]
        if(typeof obj[key] === 'object'){
            newObject[key] = deepCopy(obj[key])
        }else {
            newObject[key] = obj[key]
        }
    }
    return newObject

}

const object4 = deepCopy(object2)

object2.obj.key = 'new key'
console.log(object4.obj.key)

object4.obj.key = 'lol'
console.log(object2.obj.key)

//Prototypal inheritence
const arr1 = []
arr1.push('value1')
console.log(arr1[0])

//42.toString() invalid because primitive ddtatypes dont have a method attatched to them
const num = 42
num.toString() //works

num instanceof Number 

Number.prototype.toString = function() {return 100} //changed the prototype of toString for Number datatype
num.toString()

//changing the core affects other variables functionlities too


//scope
//lexical scoping var: variable exists till function ends or the file ends
//const and let exists till the next curly braces is reached
const object5 = {}
//object 5 = {} doesn't work as its const but
object5.a = 'a' //this works 
//the reason is that the memory location is still the same

let variableval = 51
variableval = 50
//var allows to declare the variables with same name more than once, other two don't
//notice how I am calling the function here without declaring it and it works yayyy
thisIshoisted() //but const declared function is not hoisted 
//the following line when uncommented gives error
//thisIsnotHoisted()

var Thisisavar = 50
Thisisavar++
var Thisisavar = 54
//it works while with const and let it doesn't 
//hoisting var is hoisted, declaration is hoisted, 
//function declaration is hoisted as in they can be called before, var return undefined though

function thisIshoisted()  {
    console.log('this is hoisted')
}

const thisIsnotHoisted = function() {
    console.log('this is not hoisted function due to const')
} //here the variable is hoisted but is undefined as the initialization happens only at the line it is declare at use var in place of const while declaring the variable

thisIsavariable  =  "global variable"

//closures VVI and difficult remember arrow function this 

function makefunctionarray()  {
    const arr = []
    for (var i=0; i<5; i++){
        arr.push(function() {console.log(i)})
    }
    return arr
}

const arrey = makefunctionarray()
arrey[0]()
