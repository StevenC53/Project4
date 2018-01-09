import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fight from '../components/fightLogic/fightLogic.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Fighting Game</h1>
        </header>
        <p className="App-intro">This game is blah blah blah</p>
        <Fight />
      </div>
    );
  }
}

export default App;
