import React from 'react';
// import { BanMovies } from './BanMovies.js'
import './banContent.css'

export const BanContent = (props) =>
    <div className={`banContent ${props.bannerImg}`}>
        <div className='conteiner'>
            <div className='banContent__text text'>
                <span className='text__invite'>Добро пожаловать</span>
                <div className='text__info'>
                    <div className='text__info_position'>
                        <h1 className='text__info_item'>Миллионы фильмов, сериалов, ТВ-программ.</h1>
                        <span className='text__info_item'>Исследуйте сейчас.</span>
                    </div>
                </div>
            </div>

            <div className='banContent__movie-conteiner'>
                {
                    props.upcomingMovie.map((el, i) => {
                        return (
                            <React.Fragment key={i}>
                                <img className='color' src={`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt="pop" />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    </div>