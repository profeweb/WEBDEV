import React, {Component} from 'react';
import ProjectList from '../components/ProjectList';

class Portfolio extends Component {
  render(){
    return (
        <div className="Portfolio">
          <h1> PORTFOLIO </h1>
          <ProjectList />
        </div>
    );
  }
}

export default Portfolio;