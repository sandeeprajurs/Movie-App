import React, { Component } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

let api_data = '';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
export default class MoviesDataList extends Component{

	constructor(props){
		super(props);
		this.state = {
			data:'', poster_image:''
		}
	}

	componentWillMount(){
		this.getDataFromApi();
	}


	getDataFromApi(){
		fetch(`${this.props.url}&${this.props.page}`).
		then(Response=> Response.json()).
		then(data => data.results).
		then(got_all_data => this.setState({'data': got_all_data}))
	}

	generateListOfMovies(){

		if(this.state.data){
			var settings = {
			  dots: true,
			  arrows: false,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  autoplay: true,
			  autoplaySpeed: 3000
		    };
			return (<Slider {...settings}>
					{this.state.data.map(movie => {
						
						return (<div className="container-size" key={movie.id}>
									<Link to={`/movie-description/${movie.id}`}><img className="image-size" src={`${BASE_IMAGE_URL}${movie.poster_path}`} /></Link>
								</div>)
					})}
					</Slider>)
		}
	}

	render(){
		return (<div>
			{this.generateListOfMovies()}
		</div>)
	}
}

MoviesDataList.propTypes = {
	url:  PropTypes.string,
	page: PropTypes.number,
}