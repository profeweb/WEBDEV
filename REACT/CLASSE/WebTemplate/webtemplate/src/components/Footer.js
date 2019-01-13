import React  from 'react';

class Footer extends React.Component {

    // Visualitzar el Footer
    render() {
      return (
        <footer>
          {this.props.title}
        </footer>
      );
    }
  }

export default Footer;