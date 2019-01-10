import React, { Component } from 'react';
import './App.css';
import ListResults from './ListResults'

class App extends Component {
  
	  constructor(props) {
      super(props);
      this.calculate=this.calculate.bind(this);
      this.state = {
        results: []
      }
    }

    render() {
      return (
        <div>
          <form onSubmit={this.calculate}>
            <p>Number 1:<input type="text" name="num1" /></p>
            <p>Number 2:<input type="text" name="num2" /></p>
            <input type="submit" value="ADD" />
          </form>     
          <ListResults results={this.state.results} />
        </div>
      );
    }

  calculate(event) {
    event.preventDefault();
    const v1=parseInt(event.target.num1.value,10);
    const v2=parseInt(event.target.num2.value,10);
    const r=v1+v2;
    const newCalcuation = {
      result: r,
      num1: v1,
      num2: v2
    }
    const vec = this.state.results;
    vec.unshift(newCalcuation);
    this.setState({
      results: vec
      });
    }

    
}

export default App;
