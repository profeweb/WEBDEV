import React, { Component } from 'react';
import {ThemeContext} from './App.js';

class Sidebar extends Component {
  render() {
  	return (
      <div>
      	<ThemeContext.Consumer>
	      {theme => (
	      	<div className={theme}>
	        	<h1>Sidebar</h1>
	        </div>
	      )}
	    </ThemeContext.Consumer>
      </div>
      );
    }
}

export default Sidebar;