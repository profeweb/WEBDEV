import React, {Component} from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import Social from '../components/Social';

import avatar from '../img/img_avatar.png';


class Contact extends Component {

  render(){
    return (
         <div className="condiv">
         	<Row>
         		<Col xs={6} md={4}>
         			<Image src={avatar} width={100} height={100}  />
         		</Col>
         	</Row>
         	<Row>
	            <h1 className="subtopic">Contact Me</h1>
	        </Row>
	        <Row>
	            <h3>Email  :   meumail@email.com</h3>
	        </Row>
	        <Row>
	            <h3>Instagram   :   meuIG@instagram</h3>
            </Row>
            <Row>
            	<Social />
            </Row>
        </div>
    );
  }
}

export default Contact;