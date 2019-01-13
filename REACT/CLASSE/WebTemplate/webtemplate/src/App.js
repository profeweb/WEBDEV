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
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
