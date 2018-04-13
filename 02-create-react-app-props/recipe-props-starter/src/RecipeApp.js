import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import NavBar from './NavBar';

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

RecipeApp.defaultProps = {
  myDefaultProp: []
}

export default RecipeApp;
