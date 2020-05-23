import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom'


const Todo = props => {
  return(
  <li>
    <input type="checkbox" />
    <button>Delete</button>
    <span>{props.todo.text}</span>
  </li>
  )
}
////invokes the constructor on react.component which gives us state and state properties
//quick way of cloning an array is ... method illustrated below
class App extends React.Component{
  constructor(){
    super() 
    this.state = {
      todos: [],
    }
  }

  addTodo(){
    const text = prompt("Todo text please!")
    this.setState ( {
      todos: [...this.state.todos, {text: text}], 

    })
  }

  render(){
    return (
    <div>
      <button onClick={() => this.addTodo}>Add To-Do</button>
      <ul>
        {this.state.todos.map(todo => <Todo todo={todo} />)} (Todo here is a react component)
      </ul>  
    </div>
    )
  }
}
