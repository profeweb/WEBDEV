import React, { Component } from 'react';
import {Route, BrowserRouter, NavLink} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <h1>Single Page App (BrowserRouter)</h1>
          <div className="header">
              <ul className="header">
                <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
                <li><NavLink to='/Stuff'  activeClassName="active">About</NavLink></li>
                <li><NavLink to='/Contact'  activeClassName="active">Profile</NavLink></li>
              </ul>
          </div>
          <div className="content">
              <Route path="/" exact component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
          </div>
          <div className="sidebar">
              <h3>Links Sidebar</h3>
              <ul className="sidebar">
                <li><NavLink exact to='/Stuff'  activeClassName="active">About</NavLink></li>
                <li><NavLink to='/Contact'  activeClassName="active">Profile</NavLink></li>
              </ul>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
