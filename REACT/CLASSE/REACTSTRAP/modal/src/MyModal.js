import React, { Component } from 'react';

import { Button, Modal, ModalHeader, 
		 ModalBody, ModalFooter 
		} from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faHome)


class MyModal extends Component {

	    constructor(props) {
	      super(props);
	      this.state = {
	        modal: false
	      };

	      this.toggle = this.toggle.bind(this);
	    }

	    toggle() {
	      this.setState({
	        modal: !this.state.modal
	      });
	    }

	  render() {
	    return (
	      <div>
	        <Button color="danger" onClick={this.toggle}>
	        	<FontAwesomeIcon icon="home" />{' '}
	        	{this.props.buttonLabel}
	        </Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
	          <ModalBody>
	          	{this.props.info}
	          </ModalBody>
	          <ModalFooter>
	            <Button color="primary" onClick={this.toggle}>{this.props.bLabelAccept}</Button>
	            {' '}
	            <Button color="secondary" onClick={this.toggle}>{this.props.bLabelCancel}</Button>
	          </ModalFooter>
	        </Modal>
	      </div>
	    );
	  }
}

export default MyModal;