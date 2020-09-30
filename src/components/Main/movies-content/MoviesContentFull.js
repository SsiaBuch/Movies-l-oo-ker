import React from 'react';
import './moviesContentFull.css';
import { NavLink } from 'react-router-dom';

export const MoviesContentFull = (props) => {
    return (
        <>
            { props.movies.map((el, i) => {
                return (
                    <div className='movieFull' key={i}>
                        <div className='movieFull__conteiner'>
                            <div className='movieFull__poster'>
                                <NavLink title={el.media_type === "movie" ? el.title : el.name} to='#'>
                                    <img
                                        className='movieFull__poster-img'
                                        src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                                        alt={el.title} />
                                </NavLink>
                            </div>
                            <div className='movieFull__info info'>
                                <h3 className='info__title'>
                                    <NavLink title={el.media_type === "movie" ? el.title : el.name} to='#'>
                                        {el.media_type === "movie" ? el.title : el.name}
                                    </NavLink>
                                </h3>
                                <span className='info__details'>
                                    {el.media_type === "movie" ? el.original_title : el.original_name}
                                </span>
                                <div>
                                    <span className='info__params'>Жанр:</span><span> </span>
                                </div>
                                <div>
                                    <span className='info__params'>Год:</span><span>{el.release_date}</span>
                                </div>
                                <div>
                                    <span className='info__params'>Перевод:</span><span> </span>
                                </div>
                                <div>
                                    <span className='info__params'>Режисер:</span><span> </span>
                                </div>
                                <div>
                                    <span className='info__params'>В ролях:</span><span> </span>
                                </div>
                                <div className='info__discription'>{el.overview}</div>
                            </div>
                        </div>
                    </div>
                )
            })
            }

        </>

    )
}
