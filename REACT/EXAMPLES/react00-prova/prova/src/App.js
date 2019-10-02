import React, {Component} from 'react';

import './App.css';

import Header from './Header.js';
import Content from './Content.js';
import TableRow from './TableRow.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
            "id":1,
            "name":"JOHN",
            "age":"20"
        },
        {
            "id":2,
             "name":"PETER",
              "age":"30"
        },
        {
            "id":3,
            "name":"MARY",
            "age":"40"
         }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <table border="1">
          <tbody>
              {this.state.data.map((person, i) => 
              <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
        <Content />
        <Content titol="Content 1" contingut="Meu content 1" />
        <Content titol="Content 2" contingut="Meu content 2" />
      </div>
    );
  }
}

export default App;
