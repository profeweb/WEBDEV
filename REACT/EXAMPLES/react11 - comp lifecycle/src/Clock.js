import React, {Component} from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      time: new Date()
    })
  }

  render() {
    return (
      <div>{this.state.time.toLocaleTimeString()}</div>
    );
  }

  componentDidMount() {
    this.id = setInterval(()=>this.nextSecond(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  nextSecond() {
    this.setState ({
      time: new Date()
    })    
  }

}

export default Clock;