import React, { Component } from 'react';
import './App.css';

class Song extends Component {

  	render() {
  		return(
  			<div>
  				<h3>Song Playing:</h3>
  				<p>{this.props.info.title} by {this.props.info.artist} ({this.props.info.released})
  				</p>
  			</div>
  		);
  	}

}

export default Song;