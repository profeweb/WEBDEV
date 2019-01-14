import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

import './Movies.css';

class MovieList extends Component {

	static defaultProps = {
        movies: []
    }
	
	
	getMovies() {
	    return (
	        <div className="card-deck">
	            {
	                this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
	            }
	        </div>
	    );
	}


	render() {
	    return ( <div> {this.getMovies(this.props.movies)} </div>);
	}
}


export default MovieList;