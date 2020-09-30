import React, { Component } from 'react';
import { Wrapper } from './hoc/Wrapper/Wrapper.js';
import { API, getApiString, getApiTranding } from './data/data-API.js'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monthNow: new Date().getMonth(),

      mediaType: 'movie', //person, TV, all
      trendParam: { type: 'all', period: 'week', page: 1 }, // movie, tv, person  // day, week


      page: 1,

      upcomingMovie: [],
      popularPerson: [],
      trendMovie: [],
      nowPlayMovies: [],
      nowPlayTV: [],

      flagMoviesDetails: false,
      activeMovieSelection: false,
      sortSelection: 'Все новинки',
    }
    // console.log(this.state.trendParam.period);
  }

  componentDidMount() {
    Promise.all([
      getApiString(API.UPCOMING_MOVIE, this.state.page),
      getApiString(API.PERSON_POPULAR, this.state.page),
      getApiTranding(this.state.trendParam.type, this.state.trendParam.period, this.state.trendParam.page),
      getApiString(API.NOW_PLAYING_MOVIES, this.state.page),
      getApiString(API.ON_THE_AIR_TV, this.state.page),
    ])
      .then(([upcoming, pop_person, trend, nowMovies, nowTV]) => {

        const upcomingMovie = upcoming.data.results
        // console.log(upcoming.data.results)
        const popularPerson = pop_person.data.results
        // console.log(pop_person.data.results)
        const trendMovie = trend.data.results
        // console.log(trend.data.results)
        const nowPlayMovies = nowMovies.data.results
        console.log(nowMovies.data.results)
        const nowPlayTV = nowTV.data.results
        console.log(nowTV.data.results)



        this.setState({ upcomingMovie, popularPerson, trendMovie, nowPlayMovies, nowPlayTV });

        // const api_arr = popularPeopleID.map(el => (axios.get(getApiIndex(API_TYPES.PERSON, el))))
        // Promise.all(api_arr).then(([...arr_response]) => {
        // console.log(arr_response)
        // })
      })
  }

  // Переключатель: постер фильма // название => постер фильма // краткая информация
  toggleMoviesDetails = () => {
    this.setState({
      flagMoviesDetails: !this.state.flagMoviesDetails
    })
  }
  // Переключатель: новинки => фильмы => сериалы и тд.
  toggleMovieSelection = (event) => {
    // const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      sortSelection: event.target.value,
      // activeMovieSelection: !currentState
    })
    // console.log('ffff');
  }


  movieFilterAfterNowDate = (arr) => {
    return arr.filter(el => +el.release_date.substring(5, 7) >= this.state.monthNow)
  }



  render() {
    const { upcomingMovie, popularPerson, trendMovie, nowPlayMovies, nowPlayTV } = this.state;
    // console.log();

    return (
      <Wrapper
        upcomingMovie={upcomingMovie}
        popularPerson={popularPerson}
        trendMovie={trendMovie}
        nowPlayMovies={nowPlayMovies}
        nowPlayTV={nowPlayTV}

        movieFilterAfterNowDate={this.movieFilterAfterNowDate}

        flagMoviesDetails={this.state.flagMoviesDetails}
        onToggleMoviesDetails={this.toggleMoviesDetails}

        activeMovieSelection={this.state.activeMovieSelection}
        sortSelection={this.state.sortSelection}
        onToggleMovieSelection={this.toggleMovieSelection}
      >
      </Wrapper>
    );
  }
}