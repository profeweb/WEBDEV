import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import MyCarousel from './MyCarousel.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Carousel using ReactStrap</h1>
        <Container>
                <Row>
                  <Col>
                      <MyCarousel />
                  </Col>
                </Row>
        </Container>
      </div>
    );
  }
}

export default App;
