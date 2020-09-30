import React from 'react';
import { RandomFilms } from '../../components/Library/Random-Films/RandomFilms.js'
import { SectionPeople } from '../../components/Main/SectionPeople/SectionPeople.js'
import { SectionMovies } from '../../components/Main/SectionMovies/SectionMovies.js'
import './main.css'

export const Main = (props) => {
    return (
        <div className='main'>
            <RandomFilms />
            <SectionPeople
                popularPerson={props.popularPerson}
            />
            <SectionMovies
                trendMovie={props.trendMovie}
                nowPlayMovies={props.nowPlayMovies}
                nowPlayTV={props.nowPlayTV}

                flagMoviesDetails={props.flagMoviesDetails}
                onToggleMoviesDetails={props.onToggleMoviesDetails}

                activeMovieSelection={props.activeMovieSelection}
                sortSelection={props.sortSelection}
                onToggleMovieSelection={props.onToggleMovieSelection}
            />
        </div>
    )
}
