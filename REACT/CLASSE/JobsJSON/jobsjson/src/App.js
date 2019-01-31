import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
      persons: []
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render() {
      return (
        <div className="App">
          <h1>Usuaris</h1>
          <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Usuari</th>
                  <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
            { this.state.persons.map( function (person){
                return (
                  <tr key={person.id}>
                      <td>{person.id}</td>
                      <td>{person.name}</td>
                      <td>{person.username}</td>
                      <td>{person.email}</td>
                  </tr>
                );
            })}
            </tbody>
          </table>
        </div>
      )
    }
}

export default App;
