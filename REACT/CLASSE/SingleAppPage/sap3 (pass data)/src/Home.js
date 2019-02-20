import React, { Component } from "react";
import { Link } from 'react-router-dom';
 
class Home extends Component {

  constructor(props){
    super(props);

    this.state = {info: 'information'};

    this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  handleChangeInput(event){
    this.setState({info: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p><b>INFO 2 PASS:</b> {this.state.info} </p>
        <input onChange={this.handleChangeInput} value={this.state.info} />
        <Link to={"/Stuff?info="+this.state.info}>
          <input type="button" value="GO TO STUFF" />
        </Link>
      </div>
    );
  }
}
 
export default Home;