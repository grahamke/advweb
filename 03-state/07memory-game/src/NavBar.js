import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h2><a>Memory Game</a></h2>
        <nav>
          <li><a onClick={this.props.handleNew}>New Game</a></li>
        </nav>
      </header>
    );
  }
}

export default NavBar;
