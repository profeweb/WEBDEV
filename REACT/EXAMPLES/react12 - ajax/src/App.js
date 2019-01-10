import React, { Component } from 'react';
import './App.css';

class App extends Component {
	  
  constructor(props) {
      super(props);
      this.state = {
        products: []
      }
    }

    componentWillMount() {
      fetch('info.json')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({ products: data })
        })    
    }

    render() {
      return (
        <div>
          <table border="1">
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Price</th>                    
            </tr>
          </thead>
          <tbody>  
            {this.state.products.map(item => {
              return (
                <tr key={item.code}>
                  <td>{item.code}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      );
    }

    
}

export default App;
