import React, { Component } from 'react';

import {AppContext} from './AppProvider.js';

import './App.css';

class Song extends Component {

  	render() {
  		return(
  			<div>
  				<h3>Song Playing:</h3>
  				<AppContext.Consumer>
  					{(context) => (
  						<p>{context.state.song.title} by {context.state.song.artist} ({context.state.song.released})</p>
  						)}
  				</AppContext.Consumer>
  			</div>
  		);
  	}

}

export default Song;