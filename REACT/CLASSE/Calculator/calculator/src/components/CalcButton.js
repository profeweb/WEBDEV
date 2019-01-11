import React  from 'react';

class CalcButton extends React.Component {

    // Valor de retorn en fer click
    handleClick() {
      this.props.ifClicked(this.props.value);
    }

    // Visualitzar un botó de la calculadora
    render() {
      return (
        <div className="calcButton" onClick={this.handleClick.bind(this)} >
          {this.props.value}
        </div>
      );
    }
  }

export default CalcButton;