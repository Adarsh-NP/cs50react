import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props) //allow react.component to do stuff with the props similar to how we invoked the original constructor of parent class in python
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(this.state.count)
  }

  render() {
    return (
      <div style={styles}>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))

//when we extend the react component we do this.state.count in render method, on extended component of react 
