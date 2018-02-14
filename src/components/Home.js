import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Recipe from './Recipe'
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {

  componentDidMount() {
    this.props.onLoad()
  }
  render() {
    const items = this.props.recipes.map(item => <Recipe key={item.recipe_id} recipe={item} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mealtor</h1>
          <p className="App-intro">
            Curated recipes based on your choices
          </p>
        </header>
        {items}
      </div>
    );
  }
}

Home.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Home;
