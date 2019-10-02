import React, { Component } from 'react';
import App from './App.js';

const WithUser = WrappedComponent => {
  
  var userInfo = {
    name: 'Pedro',
    age: '33'
  };

  class WithUser extends React.Component {
      render() {
        return <Component user={userInfo} {...this.props} />
      }
    }
      
  return WithUser;
 
}

export var WrappedApp = wrapWithUser(App);
