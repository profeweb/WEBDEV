import React, { Component } from 'react';
import Playlist from './Playlist.js';
import AppProvider from './AppProvider.js';
import './App.css';

class App extends Component {

  render() {
      return(
        <div className="App">
          <AppProvider>
            <Playlist />
          </AppProvider>
        </div>
      );
  }
}

export default App;
