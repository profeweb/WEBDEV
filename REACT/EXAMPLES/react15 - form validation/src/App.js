import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props);
      this.state = {
        num: ''
      };
      this.setNumber = this.setNumber.bind(this);
    }

    render() {
      return (
        <div>
          <p>Enter a binary number:
            <input type="text" value={this.state.num} onChange={this.setNumber} />
          </p>
        </div>
      );
    }

    setNumber(event) {
      const input=event.target.value;
      let n=0;
      for(let x=0; x<input.length;x++){
        if (input[x]==='0' || input[x]==='1'){
          n++;
        }
      }
      if (n===input.length){
        this.setState( {
          num: input
        })
      }
    } 

    
}

export default App;
