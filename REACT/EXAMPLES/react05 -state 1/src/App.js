import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props)
      this.getRandomNumber = this.getRandomNumber.bind(this);
      this.state = {
        num: 0
      }
    }

    render() {
      return (
        <div>
          <p>Random Number: {this.state.num}</p>
          <button onClick={this.getRandomNumber}>New Random Number</button>
        </div>
      );
    }
     
    getRandomNumber() {
      const v=Math.trunc(Math.random()*10);
      this.setState( {
        num: v
      })
    }

    
}

export default App;
