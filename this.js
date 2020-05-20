// rule of thumb
// method - this references to the object itself
// regular function - this refers to the global object

const video = {
    title: "a",
    play() {
        console.log(this)
    }
}

//Recall: another method to declare a method would be to write play: function(){ }


video.stop = function() {
    console.log(this);
}

video.stop()
//in the above cases this binds to the video object because both
//stop and play are methods of the video object 

function playVideo(){
    console.log(this)
}

playVideo()

//notice that playVideo was just a function and not a method of any class
//hence this binds to the global object in that case

const Video =  {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(element => {
            console.log(this.title,element)
        });
    }
}

//const v = new Video('b')
Video.showTags()
//if we use function instead of the arrow notation then we would get undefined for this.title because
//that was just a funciton and hence this bound to the global object and to resolve that we'll have to
// pass this as the second argument tot he forEach funciton but not all the methods give us the leverage to pass this as the argument

// here new operator creates a new empty object {} and sets this to point to the
// to point to the empty object, this references to the new empty object


//function declarations and hoisting

myfunction();

function myfunction(){
    console.log('hi')
}

myFunction //with () it is error because it is undefined

var myFunction = function (){
    console.log('hi')
}

var myObject = {
    myFunction: function (a, b){
        console.log(a +' '+b),
        console.log(this === myObject), //false
        console.log(this === global) //false
        console.log(this === myOtherobject) //true
    }
}

var myOtherobject ={}
// myObject.myFunction.call(myOtherobject, 'hello', 'world') //firs tparamater is what this binds to

// myObject.myFunction.apply(myOtherobject, ['hello', 'world']) // this, args in an array

// var myFunction = myObject.myFunction.bind(myOtherobject) //bind breaks into two different steps
// myFunction('hello', 'world') //changes the this pointer 

myObject.myFunction.bind(myOtherobject, 'hello', 'world')
//why no output?  maybe because it requires declaration, refer to the example in stack


//arrow functions with this, this is the wierdest thing encountered yet :P



