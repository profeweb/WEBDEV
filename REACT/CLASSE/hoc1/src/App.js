import React, { Component } from 'react';
import './App.css';

const UserPage = props => (
  <div class="user-container">
    <p>My name is {props.user}!</p>
  </div>
);

export default withUser(UserPage);

class App extends Component {
  render() {
    if (this.props.user) {
      return (
        <div className="App">
            <p>Logged in as {this.props.user.name}</p>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <p>You need to login</p>
        </div>
      );
    }
  }
}

export default App;
