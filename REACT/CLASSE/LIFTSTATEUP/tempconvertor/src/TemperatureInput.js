import React, { Component } from 'react';

import {scaleNames} from './App.js';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div className="temp">
          <h3>Temp in {scaleNames[scale]}:</h3>
          <input className="form-control" value={temperature}
                 onChange={this.handleChange} />
      </div>
    );
  }
}

export default TemperatureInput;
