import React, { Component } from 'react';

import './StarRating.css';



class StarRating extends Component {

	static defaultProps = {
        rating: 0,
        
    }

	render() {
	    return (
	    	<div>
	    	    <div>
	    	        <div>
	    	            <div>
	    	                <i className="fa fa-star-o fa-lg"></i>
	    	                <i className="fa fa-star-o fa-lg"></i>
	    	                <i className="fa fa-star-o fa-lg"></i>
	    	                <i className="fa fa-star-o fa-lg"></i>
	    	                <i className="fa fa-star-o fa-lg"></i>
	    	            </div>
	    	            <div>
	    	                <i className="fa fa-star fa-lg"></i>
	    	                <i className="fa fa-star fa-lg"></i>
	    	                <i className="fa fa-star fa-lg"></i>
	    	                <i className="fa fa-star fa-lg"></i>
	    	                <i className="fa fa-star fa-lg"></i>
	    	            </div>
	    	        </div>
	    	    </div>
	    	</div>
	    );
	}
}

export default StarRating;