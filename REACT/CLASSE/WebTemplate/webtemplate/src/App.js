import React, { Component } from 'react';

import './App.css';
import './components/Header.css';
import './components/Content.css';
import './components/Footer.css';

import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My Web Header" />
        <Content title="My Web Content" />
        <Footer title="My Web Footer" />
      </div>
    );
  }
}

export default App;
