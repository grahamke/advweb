import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css'
import PropTypes from 'prop-types';

class RecipeList extends Component {

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }
  render() {
    const recipes = this.props.recipes.map(r => (
      <Recipe onDelete={this.props.onDelete} key={r.id} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
