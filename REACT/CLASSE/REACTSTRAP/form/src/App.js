import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyForm from './MyForm.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Using Forms with ReactStrap</h1>
        <Container>
                <Row>
                  <Col>
                    <MyForm />
                  </Col>
                </Row>
        </Container>
        <p></p>
      </div>
    );
  }
}

export default App;
