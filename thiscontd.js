// this with arrow functions, the weirdest thing encountered yet :P


const myFunction = () => {
    console.log(this === global)
    console.log(this)
}
// this is weird as its result is different from that of the same when run in browser or node terminal

myFunction()


const myObject = {
    myfunction(){
        console.log(this === myObject) //should print true
        setTimeout(() => {
            console.log(this === myObject ) // prints true
            console.log(this === global ) //prints false
        }, 0)
    }
}

myObject.myfunction()
// call apply and bind have no effect on arrow function, example

const object1 = {}

const myfunction1 = () => {
    console.log(this === object1)
}

myfunction1()
myfunction1.call(object1)

//this shit is getting weird, I hope I can survive :P