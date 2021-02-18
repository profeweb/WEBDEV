import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';

import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Container>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/portfolio"> <Portfolio /> </Route>
            <Route path="/contact"> <Contact /> </Route>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
