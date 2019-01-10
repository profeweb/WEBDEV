import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    const buscadores=['http://www.google.com',
                      'http://www.bing.com',
                      'http://www.yahoo.com'];
    return (
      <div>
        {this.showTitle("SEARCH ENGINES")}
        <ul>
           <li><a className="red" href={buscadores[0]}>Google</a></li>
           <li><a className="green" href={buscadores[1]}>Bing</a></li>
           <li><a className="blue" href={buscadores[2]}>Yahoo</a></li>
        </ul>  
      </div>
    );

  }

  showTitle(tit) {
      return (<h1> {tit} </h1>);
  }
}

export default App;
