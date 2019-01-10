import React, {Component} from 'react'

class FormNumbers extends Component {
  render() {
    return (
    <form onSubmit={this.props.onCalculate}>
      <p>Number 1:<input type="text" name="num1" /></p>
      <p>Number 2:<input type="text" name="num2" /></p>
      <input type="submit" value="ADD" />
    </form>
    );
  }
}

export default FormNumbers;