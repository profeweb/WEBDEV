import React, { Component } from 'react';

import './StarRating.css';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px'
    }
};

const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};


class StarRating extends Component {

	static defaultProps = {
        rating: 0,
        
    }

	render() {

		const containerStyle = { width: `${cropWidth(this.props.rating)}px` };

	    return (
	    	<div>
	    	    <div style={styles.starsOuter}>
	    	        <div style={containerStyle}>
	    	            <div style={styles.starsEmptyInner}>
	    	                <i className="fa fa-star-o fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star-o fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star-o fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star-o fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star-o fa-lg" style={styles.star}></i>
	    	            </div>
	    	            <div style={styles.starsInner}>
	    	                <i className="fa fa-star fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star fa-lg" style={styles.star}></i>
	    	                <i className="fa fa-star fa-lg" style={styles.star}></i>
	    	            </div>
	    	        </div>
	    	    </div>
	    	</div>
	    );
	}
}

export default StarRating;