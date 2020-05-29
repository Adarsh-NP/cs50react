var obj = {
    a: "hello world",
    b: 42
}

let b = "a"
console.log(obj[b]) //prints the value of key a
console.log(obj['b']); //prints the value of key b

//remove obj and we'll see the value is a but with obj the value is the value of the key a in the object.

