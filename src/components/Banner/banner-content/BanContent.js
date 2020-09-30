import React from 'react';
import './banContent.css'
import { BanMovies } from '../banner-movies/BanMovies.js'

export const BanContent = (props) => {
    return (
        < div className={`banContent ${props.bannerImg}`}>
            <div className='container'>
                <div className='banContent__text text'>
                    <span className='text__invite'>Добро пожаловать</span>
                    <div className='text__info'>
                        <div className='text__info_position'>
                            <h1 className='text__info_item'>Миллионы фильмов, сериалов и людей.</h1>
                            <span className='text__info_item'>Исследуйте сейчас.</span>
                        </div>
                    </div>
                </div>
                <div className='banContent__movie'>
                    <BanMovies
                        movie={props.movieFilterAfterNowDate(props.upcomingMovie).slice(0, 5)}
                        />
                </div>
            </div>
        </div >
    )
}

