import React from 'react';
import './banMovies.css';
import { monthName } from '../../../data/data-Month.js'

export const BanMovies = (props) =>
    <>
        {
            props.movie.map((el, i) => {
                return (
                    <div className='ban-movies' key={i}>
                        <div className='ban-movie__conteiner'>
                            <div className='ban-movie__poster'>
                                <a title={el.title} href='#'>
                                    <img
                                        className='ban-movie__poster-img'
                                        src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                                        alt={el.title} />
                                </a>
                            </div>
                            <div className='ban-movie__info'>
                                <h3 className='ban-movie__title'>
                                    <a className='ban-movie__title_color' title={el.title} href='#'>
                                        {el.title}
                                    </a>
                                </h3>
                                <span className='ban-movie__details'>
                                    {`${el.release_date.substring(8, 10)} ${monthName[+el.release_date.substring(5, 7)]} ${el.release_date.substring(0, 4)}`}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>