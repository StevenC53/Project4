import React, { Component } from 'react';
import './App.css';
import FightContainer from '../components/FightContainer/FightContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my Fighting Game</h1>
        </header>
        <FightContainer />
      </div>
    );
  }
}

export default App;
