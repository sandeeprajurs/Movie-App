export const MOVIE_LIST = 'MOVIE_LIST';

export default function fetchMoviesListingData(movie_url, page){
    
    function getDataFromApi(){
		return fetch(`${movie_url}&${page}`).
                then(Response=> Response.json()).
                then(data => data.results).
                then(got_all_data => {return got_all_data})
    }

    return {
        type: MOVIE_LIST,
        payload: getDataFromApi()
    }
}

