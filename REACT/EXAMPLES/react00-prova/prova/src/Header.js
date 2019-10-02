import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
  	super(props);

  	this.state = {
  		styles :{
	       color:'red',
	       fontSize:'40px',
	       textTransform:'uppercase'
	   },

       info:'Hello REACT'

  	}
  }

  render() {
    return (
      <div>
        <h1 style={this.state.styles}>{this.state.info}</h1>
      </div>
    );
  }
}

export default Header;