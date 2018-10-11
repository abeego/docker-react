import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Info from './Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Only the chnages are constant!!!</p>
          <Info />
        </header>
      </div>
    );
  }
}

export default App;
