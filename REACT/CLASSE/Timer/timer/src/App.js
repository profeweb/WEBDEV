import React, { Component } from 'react';

import Header from './components/Header.js';
import Timer from './components/Timer.js';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'React Timer'
    };
  }

  render() {
    return (
             <div>
                 <Header title={this.state.title} />
                 <div className="mt-5">
                     <Timer />
                 </div>
             </div>
         );
     }
}

export default App;
