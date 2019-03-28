import React, {Component} from 'react';
import GetMovieList from './get_movie_list'
import PageDivision from './pages_division';

const API_KEY = '083e0850707376794b54b4e26825d9ed';
const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

export default class NowPlayingMovies extends Component{

    constructor(props){
        super(props);
        this.state = {'page': 1}
    }

    changePageNumber(page){
        this.setState({'page': page})
    }
 
    render(){
        return (
            <div>
                <GetMovieList movie_url={NOW_PLAYING_MOVIES_URL} page={this.state.page} />
                <PageDivision url= {NOW_PLAYING_MOVIES_URL} changePageNumber={page =>this.changePageNumber(page)}/>
            </div>)
    }
}
