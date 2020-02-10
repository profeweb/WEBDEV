import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Mapa from './components/Mapa';

class App extends Component {
    
    constructor() {
        super();

        this.state = {
            title: 'React Leaflet'
        };
     }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div>
                    <Mapa lat="39.571359" lng="2.970117" zoom="5" />
                </div>
            </div>
        );
    }
}

export default App;
