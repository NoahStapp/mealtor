import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import IngredientsForm from './IngredientsForm';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  render() {
    const item = this.props.currentRecipe;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mealtor</h1>
          <p className="App-intro">
            Curated recipes based on your choices
          </p>
        </header>
          <IngredientsForm onSubmit={this.props.onSubmit} />
          <Recipe key={item.recipe_id} recipe={item} />
      </div>
    );
  }
}

Home.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Home;
