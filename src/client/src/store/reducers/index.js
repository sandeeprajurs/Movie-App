import {combineReducers} from 'redux';
import MovieListReducer from './movies_list_reducer';

const allReducers = combineReducers({
		movieList: MovieListReducer
	});

export default allReducers;
