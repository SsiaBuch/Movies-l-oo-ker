import React from 'react';
import './moviesContent.css';
import { NavLink } from 'react-router-dom';

export const MoviesContent = (props) => {
    return (
        <> 
        { props.movies.map((el, i) => {
            return (
                <div className='movies' key={i}>
                    <div className='movie__conteiner'>
                        <div className='movie__poster'>
                            <NavLink title={el.title || el.name} to='#'>
                                <img
                                    className='movie__poster-img'
                                    src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                                    alt={el.title || el.name} />
                            </NavLink>
                        </div>
                        <div className='movie__info'>
                            <h3 className='movie__title'>
                                <NavLink title={el.title || el.name} to='#'>
                                    {el.title || el.name}
                                </NavLink>
                            </h3>
                            <span className='movie__details'>
                                {el.original_title || el.original_name}
                            </span>
                        </div>
                    </div>
                </div>
            )
        })
    }

</>

    )
}
  