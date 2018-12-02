import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerView from './Mobx.js'

import { observable, action } from 'mobx';
let appState = observable({
    timer: 0
});
appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000);


class App extends Component {
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
        <TimerView appState={appState} />
      </div>
    );
  }
}

export default App;
