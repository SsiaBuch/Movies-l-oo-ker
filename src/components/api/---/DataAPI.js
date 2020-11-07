import axios from 'axios';

const DEFAULT_API = `https://api.themoviedb.org/3/`;
const API_KEY = `?api_key=90fb7095127ff386353f1b685ff0f2fe`;
const LANGUAGE = `&language=ru`;
const PAGE = `&page=`

export const API = {
    UPCOMING_MOVIE: `movie/upcoming`, // [movies] list of upcoming movies in theatres.

    POPULAR: `/popular`, // [movie, TV, person]
    TRENDING_TYPE: [`all`, `movie`, `tv`],

    
    NOW_PLAYING_MOVIES: `movie/now_playing`,
    ON_THE_AIR_TV: `tv/on_the_air`,
    


};

export const getApiString = (API, page) => {
    if (!API) {
        console.error('type is required')
    }
    return axios.get(`${DEFAULT_API}${API}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}
export const getApiTranding = (type, period, page) => {
    if (!type && !period) {
        console.error('type is required')
    }
    return axios.get(`${DEFAULT_API}trending/${type}/${period}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}

export const getApiFromPopular = (type, API, page) => {
    if (!type || !API || !page) {
        console.error('error')
    }
    return axios.get(`${DEFAULT_API}${type}${API}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}










export const API_INQUIRY = {
    LATEST: `/latest`, // [movie, TV, person] This is a live response and will continuously change.
    POPULAR: `/popular`, // [movie, TV, person] list of the current popular [] on TMDb. This list updates daily.
    TOP_RATED: `/top_rated`, // [movie, TV] the top rated movies on TMDb.
};









// export const getApiIndex = (type, ind) => {
//   if (!type) {
//     console.error('type is required')
//   }
//   return `${DEFAULT_API}${type}${ind}${API_KEY}`
// }