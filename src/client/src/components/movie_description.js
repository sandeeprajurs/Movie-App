import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const API_KEY_LANGUAGE = '?api_key=083e0850707376794b54b4e26825d9ed&language=en-US`';
const MOVIE_DESCRIPTION_URL = `https://api.themoviedb.org/3/movie/`
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export default class MovieDescriptionPage extends Component {

    constructor(props){
        super(props);
        this.state = ({ 'data': '', 'youtubeKeyData': '', 'castData': '', 'recomendedMovies': '' });
    }

    componentWillMount(){
        this.getMovieData();
        this.getYouTubeID();
        this.getCast();
        this.getRecomendedMovies();
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.movieId != this.props.match.params.movieId){
            this.getMovieData();
            this.getYouTubeID();
            this.getCast();
            this.getRecomendedMovies();
        }

    }

    getMovieData(){
        fetch(`${MOVIE_DESCRIPTION_URL}${this.props.match.params.movieId}${API_KEY_LANGUAGE}`).
        then(Response=> Response.json()).
        then(data => this.setState({'data': data}));
    }

    getYouTubeID(){
        fetch(`${MOVIE_DESCRIPTION_URL}${this.props.match.params.movieId}/videos${API_KEY_LANGUAGE}`).
        then(Response=> Response.json()).
        then(data => this.setState({ 'youtubeKeyData':data['results']} ));
    }

    getCast(){
        fetch(`${MOVIE_DESCRIPTION_URL}${this.props.match.params.movieId}/credits${API_KEY_LANGUAGE}`).
        then(Response=> Response.json()).
        then(data => this.setState({ 'castData':data['cast']} ));
    }

    getRecomendedMovies(){
        fetch(`${MOVIE_DESCRIPTION_URL}${this.props.match.params.movieId}/recommendations${API_KEY_LANGUAGE}`).
        then(Response=> Response.json()).
        then(data => this.setState({ 'recomendedMovies': data['results']  }));
    }

    actorProfile(actor){
        return (<div>
                    <div className="profile-pic"><img src={`${BASE_IMAGE_URL}${actor.profile_path}`}></img></div>
                    <div className="actor-name"><p>{actor.name}</p></div>
                    <div className="actor-character"><p>as {actor.character}</p></div>
                </div>
            );
    }

    recomendedMovie(movie){
        return (<Link to={`/movie-description/${movie.id}`}>
                    <div className="rec-img-container"><img className="rec-img" src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}></img></div>
                    <div className="rec-movie-name"><p>{ movie.title }</p></div>
                </Link>
        )
    }


    renderMovieDescriptionPage(){
        if(this.state.data){
            var settings = {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            };

            var settings2 = {
                arrows: true,
                slidesToShow: 6,
                slidesToScroll: 6
            }

            return (
             <div>
                <div className="banner-container">
                    <div className="banner-image">
                        <div className="poster"><img className="poster-image" src={`${BASE_IMAGE_URL}${this.state.data.poster_path}`} /></div>
                        <div className="movie-overview">
                            <h1>{this.state.data.original_title}</h1>
                            <h2>Overview</h2>
                            <div>{this.state.data.overview}</div>
                            <h4>Viewers Rating:</h4>
                            <div><p>{this.state.data.vote_average}/ 10</p> <p>{this.state.data.vote_count} Voters</p></div>
                        </div>
                    </div>
                </div>
                <div className="movie-desc-container">
                    <div className="movie-details-container">
                        <div className="trailers-containers">
                            <h2>Movie Trailer and Teasers</h2>
                            <Slider {...settings}>
                                {this.state.youtubeKeyData != "" ? (this.state.youtubeKeyData.map(video => {
                                   return <iframe width="850" height="424" src={`https://www.youtube.com/embed/${video.key}?rel=0&amp;controls=0&amp;showinfo=0`} allow="autoplay; encrypted-media"></iframe>
                                })): null }
                            </Slider>
                        </div>
                        <div className="cast-crew-container">
                        <h2>Cast</h2>
                        <div>
                            <Slider {...settings2}>
                                {this.state.castData != "" ? (this.state.castData.map(actor => {
                                    return this.actorProfile(actor);
                                    })): null }
                            </Slider>
                        </div>
                        </div>
                    </div>
                    <div className="recomended-movies">
                        <h2>Recommendations</h2>
                        <div className="recomend-movies-list">
                            {this.state.recomendedMovies != "" ? (this.state.recomendedMovies.map( (movie, index) => {
                                if(index <10)
                                    return this.recomendedMovie(movie);
                            })) : null }
                        </div>
                    </div>
                </div>   
             </div>   
            )
        }
    }

    render(){
        return <div>{this.renderMovieDescriptionPage()}</div>
    }
}

MovieDescriptionPage.propTypes ={
    movieId: PropTypes.number,
}