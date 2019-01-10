import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props);
      this.state ={
        day: 'Monday'
      }
      this.setDay = this.setDay.bind(this);
    }

    render() {
      return (
        <div>
          <p><select value={this.state.day} onChange={this.setDay}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
          </select></p>
          <p><b>Selected Day:</b> {this.state.day}</p>
        </div>
      );
    }

    setDay(e) {
      this.setState({
        day: e.target.value
      })
    }

    
}

export default App;
