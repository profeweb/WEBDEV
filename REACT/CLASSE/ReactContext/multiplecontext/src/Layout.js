import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Content from './Content.js';


class Layout extends Component {
  render() {
    return(
      <div>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Layout;