import React  from 'react';

class Content extends React.Component {

    // Visualitzar el Contingut
    render() {
      return (
        <content>
          {this.props.title}
        </content>
      );
    }
  }

export default Content;