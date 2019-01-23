import React, { Component } from 'react';
import MyAlert from './MyAlert.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Alerts in ReactStrap</h1>
        <MyAlert tipus="primary" info="Alert primary" />
        <MyAlert tipus="secondary" info="Alert secondary" />
        <MyAlert tipus="success" info="Alert success"/>
        <MyAlert tipus="danger" info="Alert danger" />
        <MyAlert tipus="warning" info="Alert warning" />
        <MyAlert tipus="info" info="Alert info" />
        <MyAlert tipus="light" info="Alert light" />
        <MyAlert tipus="dark" info="Alert dark" />
      </div>
    );
  }
}

export default App;
