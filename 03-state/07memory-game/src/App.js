import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);

    this.startNewGame = this.startNewGame.bind(this);
  }

  startNewGame() {
    
  }

  render() {
    return (
      <div className="App">
        <NavBar handleNew={this.startNewGame}/>
        <Game numColors={8} />
      </div>
    );
  }
}

export default App;
