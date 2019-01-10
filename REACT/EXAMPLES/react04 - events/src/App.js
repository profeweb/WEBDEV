import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
	    super(props)
	    this.calculate = this.calculate.bind(this);
	  }

    render() {
      return (
            <div>
              <form onSubmit={this.calculate}>
                <p>Number 1: <input type="number" name="num1" /></p>
                <p>Number 2: <input type="number" name="num2" /></p>        
                <p><input type="submit" value="ADD" /></p>
              </form>
            </div>
          );
    }

    calculate(e) {
        e.preventDefault();
        const v1=parseInt(e.target.num1.value, 10);
        const v2=parseInt(e.target.num2.value, 10);
        const result=v1+v2;
        alert('The addition is:'+result);
      }
}

export default App;
