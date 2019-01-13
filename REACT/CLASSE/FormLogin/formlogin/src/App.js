import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';

import Modal from './components/Modal.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faAt, faLock);


class App extends Component {

  constructor(props) {
    super(props);

    // Estat del component (operands)
    this.state = {
        mounted: true
      };
    }

    getInitialState() {
      return { mounted: false };
    }
    
    componentDidMount() {
      this.setState({ mounted: true });
    }
    
    handleSubmit(e) {
      this.setState({ mounted: false });
      e.preventDefault();
    }

    render() {

      var child;
      if(this.state.mounted) {
        child = (<Modal onSubmit={this.handleSubmit} />);
      }


      return (
        <div className="App">
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              {child}
          </CSSTransitionGroup>
        </div>
      );
    }
}

export default App;