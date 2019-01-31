import React, { Component } from 'react';

import './App.css';

class ProfilePage extends Component {
	  
	render() {
	  	return (
	      <div className={this.props.theme}>
	        <h1>Profile Page</h1>
	        <p>{this.props.user}</p>
	      </div>
	    );
    }
}

export default ProfilePage;