import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import MyModal from './MyModal.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Using Modals in ReactStrap</h1>
        <Container>
                <Row>
                  <Col>
                      <MyModal className="MeuModal"
                               buttonLabel="Obri Modal"
                               title="Títol Modal"
                               info="Contingut del modal..."
                               bLabelCancel="Tancar"
                               bLabelAccept="Acceptar" />
                  </Col>
                </Row>
        </Container>
      </div>
    );
  }
}

export default App;
