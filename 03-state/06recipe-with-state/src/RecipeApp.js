import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import NavBar from './NavBar';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Spaghetti',
          ingredients: ['pasta','8 cups of water','1 box spaghetti'],
          instructions: 'Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce',
          img: 'https://cdn.pixabay.com/photo/2018/01/11/10/58/food-3075854__340.jpg'
        },
        {
          id: 1,
          title: 'Milkshake',
          ingredients: ['2 Scoops of favorite ice cream', '8 ounces of milk'],
          instructions: 'Combine ice cream and milk.  Blend until creamy',
          img: 'https://cdn.pixabay.com/photo/2015/11/23/11/54/chocolate-smoothie-1058191__340.jpg'
        },
        {
          id: 2,
          title: 'Avocade Toast',
          ingredients: ['2 slices of bread','1 avocado','1 tablespoon of olive oil','1 pinch of salt','pepper'],
          instructions: 'Toast bread.  Slice avocado and spread on bread',
          img: 'https://cdn.pixabay.com/photo/2017/05/18/02/08/bread-2322268__340.jpg'
        }
      ],
      nextRecipeId: 3
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <RecipeInput onSave={this.handleSave} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

RecipeApp.defaultProps = {
  myDefaultProp: []
}

export default RecipeApp;
