import React, { Component } from 'react';


class ProjectCard extends Component {

	static defaultProps = {
        projecte: {}
    }


	render() {

		const projecte = this.props.projecte;

	    return (
	    	<div className="project-card">
	    	    <div className="project-card card">
	    	        <img className="card-img-top" src={projecte.imageUrl} alt="" />
	    	        <div className="card-body">
	    	            <h4 className="card-title">{projecte.titol}</h4>
	    	            <h6 className="card-subtitle mb-2 text-muted">{projecte.categoria}</h6>
	    	            <p className="text-justify" style={{fontSize: '14px'}}>{projecte.descripcio}</p>
	    	        </div>
	    	        <div className="card-footer">
	    	            <div className="clearfix">
	    	                <div className="card-footer-badge float-right badge badge-primary badge-pill">
	    	                	{projecte.likes}
	    	                </div>
	    	            </div>
	    	        </div>
	    	    </div>
	    	</div>
	    );
	}
}


export default ProjectCard;