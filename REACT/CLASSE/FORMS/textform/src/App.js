import React, { Component } from 'react';
import MyForm from './MyForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My Form (input text)</h2>
        <MyForm />
      </div>
    );
  }
}

export default App;
