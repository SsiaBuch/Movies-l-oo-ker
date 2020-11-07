import React from 'react';
import './MediaItems.css'
import { monthName } from './Date.js'
import { NavLink } from 'react-router-dom';
import { ClickOnTop } from './ClickOnTop.js';

export const MediaItems = {
    bannerCard: (el, type) => {
        // console.log(i);
        return (
            <NavLink onClick={ClickOnTop} to={{
                pathname: `/movie/${el.id}-${el.original_title.toLowerCase().replace(/\s/g, '-')}`,
                // search: ``,
                // hash: ``,
            }}
            >
                <div className='card card__banner_size'
                >
                    <div className='card__banPoster'>
                        <img
                            className='card__img'
                            src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                            alt={el.title} />
                    </div>
                    <h3 className='card__banTitle'>
                        {el.title}
                        {/* {el.media_type} */}
                    </h3>
                    <div className='card__banDetails'>
                        {`${el.release_date.substring(8, 10)} ${monthName[+el.release_date.substring(5, 7)]} ${el.release_date.substring(0, 4)}`}
                    </div>
                </div>
            </NavLink>
        )

    },

    // ----------------PERSON----------------
    peopleCard: el => // done
        el.profile_path !== null ?
            <NavLink onClick={ClickOnTop}
                to={`/people/${el.id}-${el.name.toLowerCase().replace(/\s/g, '-')}`}
            >
                <div
                    className='card card__people_size'>
                    <div className='card__peopProfile'>
                        <img
                            className='card__img'
                            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                            alt={el.name}
                        />

                    </div>
                    <h3 className='card__peopName'>
                        {el.name}
                    </h3>
                </div>
            </NavLink>
            : null,

    peopleCardFull: el =>
        <NavLink onClick={ClickOnTop}
            to={`/people/${el.id}-${el.name.toLowerCase().replace(/\s/g, '-')}`}>
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
            </div>
        </NavLink>
    ,

    peopleCardDetails: el =>
        <div className='movieFull movieFull__conteiner'>
            <div className='movieFull__poster'>
                <img
                    className='movieFull__poster-img'
                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                    alt={el.name} />

            </div>
            {el.biography}
        </div>,

    // ----------------MOVIE----------------
    movieCard: (el, type) =>

        <NavLink onClick={ClickOnTop}
            to={el.media_type !== undefined ? `/${el.media_type}/${el.id}-`
                : `/movie/${el.id}-`}>
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
            </div>
        </NavLink>,

    movieCardFull: el => el.media_type !== 'tv' ?
        <div className=''>
            <div className='movieFull movieFull__conteiner'>
                <div className='movieFull__poster'>
                    <img
                        className='movieFull__poster-img'
                        src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                        alt={el.title} />
                </div>
                <div className='movieFull__info info'>
                    <h3 className='info__title'>
                        {el.title || el.name}
                    </h3>
                    {/* <span className='info__details'>
                        {el.media_type === "movie" ? el.original_title : el.original_name}
                    </span> */}
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
        </div> :
        <div className=''>
            <div className='movieFull movieFull__conteiner'
            // style={{ backgroundColor: 'red' }}
            >
                <div className='movieFull__poster'>
                    <img
                        className='movieFull__poster-img'
                        src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                        alt={el.title} />
                </div>
                <div className='movieFull__info info'>
                    <h3 className='info__title'>
                        {el.title || el.name}
                    </h3>
                    {/* <span className='info__details'>
                    {el.media_type === "movie" ? el.original_title : el.original_name}
                </span> */}
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
        </div >,

}