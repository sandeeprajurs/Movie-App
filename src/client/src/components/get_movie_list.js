import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export default class GetMovieList extends Component{

    constructor(props){
        super(props);
        this.state = {'data': ''}
    }

    componentWillMount(){
		this.getDataFromApi();
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.page !== this.props.page)
            this.getDataFromApi();
    }

    getDataFromApi(){
		fetch(`${this.props.movie_url}&page=${this.props.page}`).
		then(Response=> Response.json()).
		then(data => data.results).
		then(got_all_data => this.setState({'data': got_all_data}));
    }
    
    renderMovieList(){
        if(this.state.data){
            return (<div className="image-main-container">{this.state.data.map(movie => {
			
                return <div className="container-movie-image" key={movie.id}>
                            <Link to={`/movie-description/${movie.id}`}><img className="movie-images" src={`${BASE_IMAGE_URL}${movie.poster_path}`} /></Link>
                        </div>
            })}</div>)
        }
    }
    
    render(){
        return <div>{this.renderMovieList()}</div>
    }
}

GetMovieList.propTypes = {
    movie_url: PropTypes.string,
    page: PropTypes.number,
}