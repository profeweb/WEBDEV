import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import MyCard from './MyCard.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cards using ReactStrap</h1>
        <Container>
                <Row>
                  <Col>
                    <MyCard title="Titol 1" 
                            subtitle="Subtitol 1" 
                            text="Descripció llarga 1" 
                            photo="https://picsum.photos/200/200?image=10"
                            url="http://www.mylink1.com" />
                  </Col>
                  <Col>
                    <MyCard title="Titol 2" 
                          subtitle="Subtitol 2" 
                          text="Descripció llarga 2" 
                          photo="https://picsum.photos/200/200?image=21"
                          url="http://www.mylink2.com" />
                  </Col>
                  <Col>
                    <MyCard title="Titol 3" 
                          subtitle="Subtitol 3" 
                          text="Descripció llarga 3" 
                          photo="https://picsum.photos/200/200?image=32"
                          url="http://www.mylink3.com" />
                  </Col>
              </Row>
        </Container>
        <p></p>
      </div>
    );
  }
}

export default App;
