import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css'
import PropTypes from 'prop-types';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: 'Spaghetti',
        ingredients: ['pasta','8 cups of water','1 box spaghetti'],
        instructions: 'Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce',
        img: 'https://cdn.pixabay.com/photo/2018/01/11/10/58/food-3075854__340.jpg'
      },
      {
        title: 'Milkshake',
        ingredients: ['2 Scoops of favorite ice cream', '8 ounces of milk'],
        instructions: 'Combine ice cream and milk.  Blend until creamy',
        img: 'https://cdn.pixabay.com/photo/2015/11/23/11/54/chocolate-smoothie-1058191__340.jpg'
      },
      {
        title: 'Avocade Toast',
        ingredients: ['2 slices of bread','1 avocado','1 tablespoon of olive oil','1 pinch of salt','pepper'],
        instructions: 'Toast bread.  Slice avocado and spread on bread',
        img: 'https://cdn.pixabay.com/photo/2017/05/18/02/08/bread-2322268__340.jpg'
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
