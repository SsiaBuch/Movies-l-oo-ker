import React from 'react';

export const PopMovies = (props) => {
    // console.log(props.upcomingMovie)
    return (
        <>
            {
                props.upcomingMovie.map((el, i) => {
                    return (
                        <React.Fragment key={i}>
                                <img className='color' src={`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt="pop" />
                        </React.Fragment>
                    )
                })
            }
        </>



    )
}
