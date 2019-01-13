import React, { Component } from 'react';


import './Modal.css';
import InputForm from './InputForm.js';

class Modal extends Component {

  render() {
    return (
      <div className="Modal">
        <form onSubmit={this.props.onSubmit} className="ModalForm">
          <InputForm id="name" type="text" placeholder="Nom usuari" icon="user" />
          <InputForm id="username" type="email" placeholder="nomusuari@gmail.com" icon="at" />
          <InputForm id="password" type="password" placeholder="password" icon="lock" />
          <button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
        </form>
      </div>
    );
  }

}

export default Modal;