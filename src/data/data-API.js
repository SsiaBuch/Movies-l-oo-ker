import axios from 'axios';

const DEFAULT_API = `https://api.themoviedb.org/3/`;
const API_KEY = `?api_key=90fb7095127ff386353f1b685ff0f2fe`;
const LANGUAGE = `&language=ru`;
const PAGE = `&page=`

export const API = {
    UPCOMING_MOVIE: `movie/upcoming`, // [movies] list of upcoming movies in theatres.
    PERSON_POPULAR: `person/popular`,
    NOW_PLAYING_MOVIES: `movie/now_playing`,
    ON_THE_AIR_TV: `tv/on_the_air`,


};
export const API_INQUIRY = {
    LATEST: `/latest`, // [movie, TV, person] This is a live response and will continuously change.
    POPULAR: `/popular`, // [movie, TV, person] list of the current popular [] on TMDb. This list updates daily.
    TOP_RATED: `/top_rated`, // [movie, TV] the top rated movies on TMDb.
};

export const getApiTranding = ( type, period, page ) => {
    if (!type || !period ) {
        console.error('type is required')
    }
    return axios.get(`${DEFAULT_API}trending/${type}/${period}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}

export const getApiString = (inquiry, page) => {
    if (!inquiry) {
        console.error('type is required')
    }
    return axios.get(`${DEFAULT_API}${inquiry}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}

export const getApiFromType = (type, inquiry, page) => {
    if (!type || !inquiry) {
        console.error('error')
    }
    return axios.get(`${DEFAULT_API}${type}${inquiry}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}




// export const getApiIndex = (type, ind) => {
//   if (!type) {
//     console.error('type is required')
//   }
//   return `${DEFAULT_API}${type}${ind}${API_KEY}`
// }