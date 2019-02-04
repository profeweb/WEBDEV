import React, { Component } from 'react';
import './MyForm.css';

class MyForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="MyForm">

        <form  onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input type="text"  value={this.state.value} 
                     onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>

        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default MyForm;