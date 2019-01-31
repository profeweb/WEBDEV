import React, { Component } from 'react';
import Playlist from './Playlist.js';
import './App.css';

class App extends Component {

  state = {

    song : {
      title: 'Despacito',
      artist: 'Luis Fonsi',
      released: '2017',
    }
  }

  render() {
      return(
        <div className="App">
          <h1>Music App</h1>
          <Playlist currentSong={this.state.song} />
        </div>
      );
  }
}

export default App;
