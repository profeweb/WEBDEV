import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {
    super(props)
    this.state = {
      products: [{
                      code: 1, 
                      description: 'potatoes',
                      price: 12.52
                 },{
                      code: 2, 
                      description: 'oranges',
                      price: 21
                 },{
                      code: 3, 
                      description: 'bananas',
                      price: 18.20
                 }]
    }
    this.deleteLastRow = this.deleteLastRow.bind(this);
  }

  render() {
    return (
      <div>
        <table border="1">
        <thead><tr><th>Code</th><th>Description</th><th>Price</th></tr></thead>
        <tbody>
        {this.state.products.map(item => {
          return (
            <tr key={item.code}>
              <td>
                {item.code}  
              </td>
              <td>
                {item.description}
              </td>
              <td>
                {item.price}
              </td>              
            </tr>
          )
        })}    
        </tbody>    
        </table>
        <button onClick={this.deleteLastRow}>Delete Last Row</button>
      </div>
    );
  }

  deleteLastRow() {
    if (this.state.products.length > 0) {
      var temp = this.state.products;
      temp.pop();
      this.setState({
        products: temp
      })
    }  
  }

    
}

export default App;
