import React, { Component } from 'react';
import logo from './logo.svg';
import MyForm from './MyForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Form Validation Demo</h2>
        </div>
        <MyForm />
      </div>
    );
  }
}

export default App;
