import axios from 'axios';

const DEFAULT_API = `https://api.themoviedb.org/3/`;
const API_KEY = `?api_key=90fb7095127ff386353f1b685ff0f2fe`;
const LANGUAGE = `&language=ru`;
const PAGE = `&page=`

export const dataAPI = {
    type: [`movie`, `tv`, `person`],
    option: [`upcoming`, `popular`, `trending`, `now_playing`, `on_the_air`, `top_rated`],
    //            0           1          2           3                4          5 
    option1: {upcoming: `upcoming`, popular: `popular`, trending: `trending`, now_playing: `now_playing`, on_the_air: `on_the_air`, top_rated: `top_rated`},
    trending_type: [`all`, `movie`, `tv`],
}
export const getAPI = (type, option, page) => {
    if (!type || !option || !page) {
        console.error('error')
    }
    return axios.get(`${DEFAULT_API}${type}/${option}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}

export const getApiTrand = (type, period, page) => {
    if (!type && !period) {
        console.error('type is required')
    }
    return axios.get(`${DEFAULT_API}trending/${type}/${period}${API_KEY}${LANGUAGE}${PAGE}${page}`)
}

export const getAPIbyID = (type, id) => {
    if (!type || !id) {
        console.error('error')
    }
    return axios.get(`${DEFAULT_API}${type}/${id}${API_KEY}${LANGUAGE}`)
}

export const getAPISearch = () => {
    return axios.get(`${DEFAULT_API}/search/person${API_KEY}${LANGUAGE}&include_adult=false`)
}
