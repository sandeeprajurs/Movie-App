import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MoviesDataList from './get_movies_data';
import fetchMoviesListingData from '../store/actions/index';

export const API_KEY = '083e0850707376794b54b4e26825d9ed';
export const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export default class HomePage extends Component {

	render(){
		return (
			<div className="slider home-page">
				<div className="movie-block">
					<div><h1>In Theaters</h1></div>
					<MoviesDataList url={NOW_PLAYING_MOVIES_URL} page={1} />
					<Link className="view-more" to="/view-all-nowplaying"><p>View More</p></Link>
				</div>
				<div className="movie-block">
					<div><h1>Popular Movies</h1></div>
					<MoviesDataList url={POPULAR_MOVIES_URL} page={1} />
					<Link className="view-more" to="/view-all-popular"><p>View More</p></Link>
				</div>
				<div className="movie-block">
					<div><h1>Top Rated Movies</h1></div>
					<MoviesDataList url={TOP_RATED_MOVIES_URL} page={1} />
					<Link className="view-more" to="/view-all-toprating"><p>View More</p></Link>
				</div>
			</div>
			)
	}
}


