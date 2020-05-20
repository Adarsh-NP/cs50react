//declarative: imperitive programming, series of steps to get to what you want
// declarative implementation detail on how to get it
// in jsx a tag with a capital start gets invoked as a function
// single curlies are read as execute as a javascript
// continues from the node summit video
import React from 'react'

class MyComponent extends React.Component {
    onClick(){
        console.log(this instanceof MyComponent) //prints false
    }
    render(){
    return (
        <button onClick={this.onClick}>Click Me! </button>
     )
    }
}


