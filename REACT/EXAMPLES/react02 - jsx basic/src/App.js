import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const myNumber=13;
      const information = {
        name: 'Joan',
        age: 34
      }
      return (
        <div>
          <h1>Header 1</h1>
          <hr />
          <p>My favorite number is {myNumber}.</p>
          <h3>Access to an object.</h3>
          <p>{information.name} is {information.age} years old.</p>
          <h3>Calling a method.</h3>
          <p>It gets a random number: {this.getRandomNumber()} </p>
          <h3>Calculating expression in JSX.</h3>
          <p>3 + 3 = {3+3}.</p>
        </div>
      );
    }

    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }
}

export default App;
