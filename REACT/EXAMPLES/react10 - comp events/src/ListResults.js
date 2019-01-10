import React, {Component} from 'react'

class ListResults extends Component {
  render() {
    return (
      	<ul>
      		{this.props.results.map((item) => (
        		<li>SUM OF {item.num1} AND {item.num2} IS {item.result}</li>
      		))}
    	</ul>      
    )
  }

}

export default ListResults;