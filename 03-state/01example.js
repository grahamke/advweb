import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props); // always call super in the constructor
    this.state  = { favColor: 'red'}; // this.state holds state

    setTimeout(() => {
      this.setState({favColor: 'blue'})  //correct way to set/change state
      // after setState is invoke (async), it will recall render()
    }, 2000);
  }
  render() {
    return (
      <div>
        My favorite color:
        {this.state.favColor}
      </div>
    );
  }
}
