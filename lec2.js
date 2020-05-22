//static method: attached to the class
//method: defined for an instance
//properties: values and are associated with the instance of the class
//set: list of unique values, supports Add, delete and inclusion, and ability to resize
class Set {
    constructor(arr){
        this.arr = arr
    }
    add(val){
        if(!this.has(val)) this.arr.push(val)
        else console.log("already exists")
    }
    delete(val){
        this.arr = this.arr.filter( x => x !== val )
    }
    has(val){
        return this.arr.includes(val)
    }
    
    get size() {
        return this.arr.length
    }
}

const s = new Set([1,2,3,4,5])
s.add(1) 
s.add(1)
s.add(1)

s.add(6)
s.delete(6)
console.log(s.size)
//extends: adding to the base class
//super: refering to the original class that we are extending, kinda used to extend to the constructor of the base class similar to how in python we write classname.__init__ to extend 

