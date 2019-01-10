import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props);
      this.state ={
        days: ['Monday']
      }
      this.setDays = this.setDays.bind(this);
    }

    render() {
      return (
        <div>
          <p><select multiple value={this.state.days} onChange={this.setDays}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
          </select></p>
          <p><b>Selected Day(s):</b> {this.printSelection()}</p>
        </div>
      );
    }

    setDays(e) {
      const options = e.target.options;
      const selectedOptions = [];
      for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
              selectedOptions.push(options[i].value);
            }      
          }    
          this.setState({
            days: selectedOptions
          })
    }

    printSelection(){
      return this.state.days.join();
    }

    
}

export default App;
