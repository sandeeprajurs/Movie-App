import { MOVIE_LIST } from '../actions/index';

export default function(state = '', action){
    
    switch(action.type){
        case MOVIE_LIST:
            return [action.payload, ...state];
    }

    return state;
}