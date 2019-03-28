import React, { Component } from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";
import HeadersFooters from './headers_footers';
import HomePage from './home_page';
import NowPlayingMovies from './now_playing_movies';
import TopRatedMovies from './top_rated_movies';
import PopularMovies from './popular_movies';
import MovieDescriptionPage from './movie_description'

class App extends Component {
  render() {
    return (
    <HashRouter>
      <div>
        <HeadersFooters />
        <Switch>
          <Route path="/movie-description/:movieId" render={ (props) => <MovieDescriptionPage {...props} /> } />
          <Route path="/view-all-nowplaying" component={ NowPlayingMovies } />
          <Route path="/view-all-toprating" component={ TopRatedMovies } />
          <Route path="/view-all-popular" component={ PopularMovies } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    </HashRouter>
    );
  }
}

export default App;