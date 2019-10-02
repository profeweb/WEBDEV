import React, {Component} from 'react';

class TableRow extends Component {

  render() {
    return (
      <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default TableRow;