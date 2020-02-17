import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Mapa from './components/Mapa';

const API = "http://www.goatrails.dawman.info/api/get/first-point-route/all";


class App extends Component {
    
    constructor() {
        super();

        this.state = {
            title: 'React Leaflet',
            rutes: null,
        };
     }

    componentDidMount() {
      axios.get(API)
        .then(res => {
          const data = res.data;
          this.setState({ rutes:  data});
        })
    }

    render() {
        console.log(this.state.rutes);
        return (
            <div>
                <Header title={this.state.title} />
                <div>
                    <Mapa lat="39.571359" lng="2.970117" zoom="10" rutes={this.state.rutes}  />
                </div>
            </div>
        );
    }
}

export default App;
