import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
      super(props);
      this.state = {
        text: '',
      }
      this.setText = this.setText.bind(this);
    }

    render() {
      return (
        <div>
         <p><textarea value={this.state.text} onChange={this.setText} cols="100" rows="5"></textarea></p>
         <p>Num characters in the textarea: {this.state.text.length}</p>        
        </div>
      );
    }

    setText(e) {
      this.setState( {
        text: e.target.value,
      })
    }

    
}

export default App;
