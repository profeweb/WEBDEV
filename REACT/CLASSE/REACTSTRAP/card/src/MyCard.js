import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  		 CardTitle, CardSubtitle, Button } from 'reactstrap';

import './App.css';

class MyCard extends Component {
  render() {
    return (
      			<Card>
			        <CardImg top width="100%" src={this.props.photo} alt="Card image cap" />
			        <CardBody>
			            <CardTitle> TITOL: {this.props.title}</CardTitle>
			            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
			            <CardText>{this.props.text}</CardText>
			            <Button href={this.props.url}>Button</Button>
			        </CardBody>
			    </Card>
    );
  }
}

export default MyCard;