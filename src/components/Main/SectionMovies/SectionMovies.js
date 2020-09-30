import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle.js';
import { Navigation } from '../../Library/Navigation/Navigation.js'
import { MoviesContent } from '../movies-content/MoviesContent.js';
import { MoviesContentFull } from '../movies-content/MoviesContentFull.js';
import { MoviesAsideBlock } from '../movies-asideBlock/AsideBlockTitle.js';
import { ButtonMoviesDetailsChange } from '../../Library/Button/ButtonMoviesDetailsChange.js'
import { AsideBlockTitle } from '../movies-asideBlock/AsideBlockTitle.js'
import { MovieSort } from '../MovieSort.js'
import './sectionMovies.css';

export const SectionMovies = (props) => {
    return (
        <div className='section-movie'>
            <div className='container'>
                <div className='section-movie_stylization'>
                    {/* ------ Переключатель отображения info по фильмам --------- */}
                    <ButtonMoviesDetailsChange
                        style="section-movie__toggle-button"
                        flag={props.flagMoviesDetails}
                        onClick={props.onToggleMoviesDetails}
                    />
                    {/* ------ Main-Block--------- */}
                    <div className='section-movie__main-block main-block'>
                        <div className='main-block__header'>
                            <div className='main-block__title'>
                                <SectionTitle
                                    title="Фильмы и сериалы"
                                    logo="main-block__logo"
                                />
                                <MovieSort />
                            </div>

                            <Navigation
                                navStyle='main-block__nav'
                                styleActive='main-block__nav_active'
                                navList={['Все новинки', 'Фильмы', 'Сериалы']}
                                href={['/new', '/films', '/tv']}
                                onClick={props.onToggleMovieSelection}
                                sortSelection={props.sortSelection}
                            />
                        </div>
                        <div className='main-block__content'>
                            {
                                props.flagMoviesDetails ?
                                    <MoviesContentFull movies={props.trendMovie} /> : <MoviesContent movies={props.trendMovie} />
                            }
                        </div>
                    </div>

                    {/* ------ Aside-Block--------- */}
                    <div className='section-movie__aside-block'>
                        <div className='aside-block'>

                            <div className='aside-block__block'>
                                <div className='aside-block__title'>
                                    <AsideBlockTitle
                                        title="NOW"
                                        preTitle="фильмы" />
                                </div>
                                <div className='aside-block__content'>
                                    <MoviesContent movies={props.nowPlayMovies.slice(0, 1)} />
                                </div>
                            </div>
                            <div className='aside-block__block'>
                                <div className='aside-block__title'>
                                    <AsideBlockTitle
                                        title="NOW"
                                        preTitle="сериалы" />
                                </div>
                                <div className='aside-block__content'>
                                    <MoviesContent movies={props.nowPlayTV.slice(0, 1)} />
                                </div>
                            </div>


                            
                        </div>
                        {/* ---------Реклама--------- */}
                        <div className='section-movie__aside-advertising'>
                            <div className='aside-advertising__img'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}