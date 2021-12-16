import React, { Component } from 'react';
import './App.css';

import Layout from './Layout.js';

// Context per al tema
export const ThemeContext = React.createContext();

// Context per a l'usuari
export const UserContext = React.createContext();

class App extends Component {


  render() {

      const {signedInUser, theme} = this.props;

      return (
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <Layout />
          </UserContext.Provider>
        </ThemeContext.Provider>
      );
    }
}

export default App;
