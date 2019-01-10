import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
	constructor(props) {

      super(props);
      this.state = ({
          name:'',
          age:'',
          studies: false
        })

      this.procesInfo = this.procesInfo.bind(this);
      this.setName = this.setName.bind(this);
      this.setAge = this.setAge.bind(this);    
      this.setStudies = this.setStudies.bind(this);
    }


    render() {
      return (
        <div>
          <form onSubmit={this.procesInfo}>
            <p>Name:<input type="text" value={this.state.name} onChange={this.setName} /></p>
            <p>Age:<input type="number" value={this.state.age} onChange={this.setAge} /></p>
            <p>Studies:<input type="checkbox" value={this.state.studies} onChange={this.setStudies} /></p>          
            <p><input type="submit" /></p>
          </form>
          <hr />
          <h3>Data Entered</h3>
          <p>Name:{this.state.name}</p>
          <p>Age:{this.state.age}</p>
          <p>Studies:{this.state.studies ? 'with studies':'without studies'}</p>        
        </div>
      );
    }

    procesInfo(e) {
      e.preventDefault();
      alert('Data processed '+this.state.name + ' ' + 
                             +this.state.age + ' ' + 
                             +this.state.studies);
    }

    setName(e) {
      this.setState( {
        name: e.target.value
      })
    }

    setAge(e) {
      this.setState( {
        age: e.target.value
      })
    }  

    setStudies(e) {
      this.setState( {
        studies: !this.state.studies
      })
    }    

    
}

export default App;
