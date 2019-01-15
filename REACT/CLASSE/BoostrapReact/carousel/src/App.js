import React, { Component } from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
          <Row>
            <Col xs={12} md={8}>
              <h1>Carousel React-Bootstrap</h1>
            </Col>
          </Row>
          <Row>
            <Col  xs={12} md={8}>
              <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="https://picsum.photos/900/500/?image=50" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="https://picsum.photos/900/500/?image=100" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="https://picsum.photos/900/500/?image=200" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
