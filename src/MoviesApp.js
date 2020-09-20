import React from 'react';
import axios from 'axios';
import { DEFAULT_API, API_KEY, API_TYPES } from './API.js'
import { MoviesWrapper } from './MoviesWrapper.js';


const getApiString = type => {
  if (!type) {
    console.error('type is required')
  }
  return `${DEFAULT_API}${type}${API_KEY}`
}

export class MoviesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingMovie: [],
      popularMovies: [],


    }
  }

  componentDidMount() {
    Promise.all([
      axios.get(getApiString(API_TYPES.UPCOMING)),
      axios.get(getApiString(API_TYPES.POPULAR)),
    ])
      .then(([a1, a2]) => {
        console.log(a1.data, a2.data)

        const upcomingMovie = a1.data.results.slice(0, 5)
        const popularMovies = a2.data.results.slice(0, 6)

        this.setState({ upcomingMovie, popularMovies, });

      })
  }


  render() {
    // console.log(this.state.popMovie[0])
    return (
      <>
        <MoviesWrapper
          upcomingMovie={this.state.upcomingMovie}
          popularMovies={this.state.popularMovies}
        />
      </>
    );
  }
}