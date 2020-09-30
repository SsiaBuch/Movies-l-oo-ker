import React from 'react';
import { Banner } from '../Banner/Banner.js';
import { Main } from '../Main/Main.js';

export const Wrapper = (props) => {
    return (
        <>
            <Banner
                upcomingMovie={props.upcomingMovie}
                movieFilterAfterNowDate ={props.movieFilterAfterNowDate}
            />
            <Main
                popularPerson={props.popularPerson}
                trendMovie={props.trendMovie}
                nowPlayMovies={props.nowPlayMovies}
                nowPlayTV={props.nowPlayTV}

                flagMoviesDetails={props.flagMoviesDetails}
                onToggleMoviesDetails={props.onToggleMoviesDetails}

                activeMovieSelection={props.activeMovieSelection}
                sortSelection={props.sortSelection}
                onToggleMovieSelection={props.onToggleMovieSelection}
            />
            {/* <Footer />  */}
        </>
    )
}