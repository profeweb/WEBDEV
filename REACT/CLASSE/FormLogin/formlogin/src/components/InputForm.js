import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './InputForm.css';

class InputForm extends Component {

  render() {
    return (
      <div className="Input">
        <FontAwesomeIcon icon={this.props.icon} color="white" />
        <input id={this.props.name} autoComplete="false" required type={this.props.type} placeholder={this.props.placeholder} />  
        {/*<label htmlFor={this.props.name}></label>*/}
      </div>
    );
  }
}

export default InputForm;