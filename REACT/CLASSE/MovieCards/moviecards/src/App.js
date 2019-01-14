import React, { Component } from 'react';
import Header from './components/Header.js';
import Movies from './components/Movies.js';

import './App.css';

class App extends Component {
  	
  	constructor() {
        
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Movies />
                </div>
            </div>
        );
    }
}

export default App;
