import React, {Component} from 'react';

import './Content.css';

class Content extends Component {

  static defaultProps = {
  	titol:"Titol per Defecte",
  	contingut:"Contingut per Defecte"
  }
  render() {
    return (
      <div className="content">
        <h2>{this.props.titol}</h2>
        <p>{this.props.contingut}</p>
      </div>
    );
  }
}

export default Content;