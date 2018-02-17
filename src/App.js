import React, { Component } from 'react';
import AppTabs from './AppTabs';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    index: 0
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <AppTabs />
      </div>
    );
  }
}

export default App;
