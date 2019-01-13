import React  from 'react';

class Header extends React.Component {

    // Visualitzar el Header
    render() {
      return (
        <header>
          {this.props.title}
        </header>
      );
    }
  }

export default Header;