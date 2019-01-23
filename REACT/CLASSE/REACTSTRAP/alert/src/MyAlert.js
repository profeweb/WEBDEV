import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class MyAlert extends Component {

  render() {
    return (
    	<div>
	      <Alert color={this.props.tipus}>
	      	{this.props.info}
	      </Alert>
      	</div>
    );
  }
}

export default MyAlert;