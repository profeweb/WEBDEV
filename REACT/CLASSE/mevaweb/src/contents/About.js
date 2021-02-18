import React, {Component} from 'react';
import { ListGroup, Row } from 'react-bootstrap';

class About extends Component {

	constructor(props){

		super(props);

		this.state = {
			 'temes':['HTML','CSS','JS','JQUERY','REACT JS']
		};
	}

	render(){
	    return (
	        <div className="About">
		        <Row>
		        	<h1> TEMES </h1>
		        </Row>
		        <Row>
		          	<ListGroup>
						{ this.state.temes.map(
								function(value, index){
									return <ListGroup.Item key={index}>{value}</ListGroup.Item>
								}
							)
						}
					</ListGroup>
	         	</Row>
	        </div>
	    );
	}
}

export default About;