import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';

class ProjectList extends Component {

	static defaultProps = {
        projectes: [ { "id": 1, 
    					"titol": "titol del projecte",
    					"categoria": "categoria del projecte",
    					"descripcio": "infooooooo",
    					"likes": 44 }
        			]
    }

	render() {
	    return ( 
	    	<div> 
	    		<div className="card-deck">
	            {
	                this.props.projectes.map( 
	                	function(projecte, index){
	                		<ProjectCard key={projecte.id} info={projecte} />
	                	}
	                )
	            }
	        </div> 
	     </div>);
	}
}

export default ProjectList;