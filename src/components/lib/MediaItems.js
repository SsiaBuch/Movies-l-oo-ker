import React from 'react';
import './MediaItems.css'
import { monthName } from './Date.js'

export const MediaItems = {
    bannerCard: el => // done
        <div className='card card__banner_size'>
            <div className='card__banPoster'>
                <img
                    className='card__img'
                    src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                    alt={el.title} />
            </div>
            <h3 className='card__banTitle'>
                {el.title}
            </h3>
            <div className='card__banDetails'>
                {`${el.release_date.substring(8, 10)} ${monthName[+el.release_date.substring(5, 7)]} ${el.release_date.substring(0, 4)}`}
            </div>
        </div>,

    peopleCard: el => // done
        <div className='card card__people_size'>
            <div className='card__peopProfile'>
                <img
                    className='card__img'
                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                    alt={el.name} />
            </div>
            <h3 className='card__peopName'>
                {el.name}
            </h3>
        </div>,
    // peopleCardPoster: el => // done
    //     <div className='card__people-poster_size'>
    //         <img
    //             className='card__people-poster'
    //             src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
    //             alt={el.name} />
    //     </div>,

    peopleCardFull: el =>
        <div className='card card__movie_size'>
            <div className='card__moviePoster'>
                <img
                    className='card__movie-img'
                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                    alt={el.name} />
            </div>
            <h3 className='card__movieTitle'>
                {el.name}
            </h3>
        </div>,

    movieCard: el =>
        <div className='card card__movie_size'>
            <div className='card__moviePoster'>
                <img
                    className='card__movie-img'
                    src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                    alt={el.title || el.name} />
            </div>
            <h3 className='card__movieTitle'>
                {el.title || el.name}
            </h3>
            <div className='card__movieDetails'>
                {el.original_title || el.original_name}
            </div>
            <div className='card__banDetails'>
                {el.first_air_date || el.release_date}
            </div>
        </div>,
    movieCardFull: el =>
        <div className='movieFull'>
            <div className='movieFull__conteiner'>
                <div className='movieFull__poster'>
                    <img
                        className='movieFull__poster-img'
                        src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                        alt={el.title} />
                </div>
                <div className='movieFull__info info'>
                    <h3 className='info__title'>
                        {el.media_type === "movie" ? el.title : el.name}
                    </h3>
                    <span className='info__details'>
                        {el.media_type === "movie" ? el.original_title : el.original_name}
                    </span>
                    <div>
                        <span className='info__params'>Жанр:</span><span> </span>
                    </div>
                    <div>
                        <span className='info__params'>Год:</span><span>{el.first_air_date || el.release_date}</span>
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
}