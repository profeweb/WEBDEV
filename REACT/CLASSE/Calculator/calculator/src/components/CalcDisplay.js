import React  from 'react';

class CalcDisplay extends React.Component {

    // Props per defecte
    static get defaultProps() {
      return {
        displayNumber: 0
      };
    }

    // Visualitzar el display de la calculadora
    render() {
      return (
        <div className="calcDisplay">
          {this.props.displayNumber}
        </div>
      );
    }
};

export default CalcDisplay;