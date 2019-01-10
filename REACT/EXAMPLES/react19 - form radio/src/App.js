import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props);
      this.state = {
        studies: 'Primary'
      }
      this.setStudies = this.setStudies.bind(this);
    }

    render() {
      return (
        <div>
          <p><input type="radio" value="Primary" checked={this.state.studies==='Primary'}
            onChange={this.setStudies} />Primary Education</p>
          <p><input type="radio" value="Secundary" checked={this.state.studies==='Secundary'}
            onChange={this.setStudies} />Secundary Education</p>
          <p><input type="radio" value="University" checked={this.state.studies==='University'}
            onChange={this.setStudies} />University Education</p>
          <p><b>Selected Studies:</b> {this.state.studies}</p>
        </div>
      );
    }

    setStudies(e) {
      this.setState({
        studies: e.target.value
      })
    }
    
}

export default App;
