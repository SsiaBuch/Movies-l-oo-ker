import React from 'react';
import { Banner } from './components/Banner/Banner.js';
import { Main } from './components/Main/Main.js';

export const MoviesWrapper = (props) => {
    return (
        <>
            <Banner upcomingMovie={props.upcomingMovie}
                 />

            <Main popularMovies={props.popularMovies}/>
            {/* <Footer />  */}
        </>
    )
}