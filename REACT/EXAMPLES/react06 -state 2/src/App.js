import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props)
      this.getRandomNumbers = this.getRandomNumbers.bind(this);
      this.state = {
        nums: [0,0,0,0,0]
      }
    }

    render() {
      return (
        <div>
          <h1>Random Numbers:</h1>
          {this.state.nums.map(function(num){ 
              return (<p>{num}</p>); 
            }
          )}
          <button onClick={this.getRandomNumbers}>New Random Numbers</button>
        </div>
      );
    }
     
    getRandomNumbers() {
      const vec = new Array(5);
      for(let x=0; x<vec.length; x++){
        vec[x]=Math.trunc(Math.random()*10);
          this.setState( {
            nums: vec
          });
      }
    }

    
}

export default App;
