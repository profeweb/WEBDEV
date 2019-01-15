import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
      super() 
        this.state = {
          data: []
        }
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  
  render() {
              
      return (
        <div class="App">
        <div class="container">
            <h1>Table JSON React </h1>
            <table  class="table table-striped table-bordered">
              <thead>
                <tr><th>Id</th><th>UserId</th><th>Title</th><th>Body</th></tr>
              </thead>
              <tbody>{this.state.data.map(function(item, key) {
                     return (
                        <tr key = {key}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                      )
                   
                   })}</tbody>
             </table>
           </div>
         </div>
      )
    }
}

export default App;
