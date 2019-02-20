import React, { Component } from "react";
import queryString from 'query-string';
 
class Stuff extends Component {

  render() {

    const values = queryString.parse(this.props.location.search);

    return (
      <div>
        <h2>STUFF</h2>
        <h3>DATA FROM URL:{values.info}</h3>

        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;