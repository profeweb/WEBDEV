import React, { Component } from 'react';
import './App.css';

class BolingVerdict extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let message =  (this.props.celsius >= 100)? "The water would boil.":"The water would not boil.";
    let aStyle =  (this.props.celsius >= 100)? "alert alert-success":"alert alert-danger";

    return (
            <div className="verdict">
              <div className={aStyle} role="alert">
                <strong>{message}</strong>
              </div>
            </div>
          );
  }
}

export default BolingVerdict;
