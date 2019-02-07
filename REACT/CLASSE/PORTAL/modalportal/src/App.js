import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';

class App extends Component {
  state = {showModal: false}
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
  render() {
    return (
      <div>
          <h1>Modal with React Portal</h1>
          <p>
            This is an example of how you might use React.createPortal. I think
            it is a pretty neat API that is yet another awesome escape hatch
            that React provides for practical reasons. Sometimes you just need
            to render something completely outside the React Tree.
          </p>
          <button onClick={this.handleShowMessageClick}>
            Show Modal
          </button>
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              This is the modal message!
            </Modal>
          ) : null}

      </div>
    )
  }
}

export default App;
