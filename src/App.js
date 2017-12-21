import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mealtor</h1>
          <p className="App-intro">
            Curated recipes based on your choices
          </p>
        </header>
      </div>
    );
  }
}

export default App;
