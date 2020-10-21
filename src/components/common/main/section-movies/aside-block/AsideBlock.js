import React from 'react';
// import { SectionTitle } from '../SectionTitle/SectionTitle.js';
// import { Navigation } from '../../Library/Navigation/Navigation.js'
// import { MoviesContent } from '../movies-content/MoviesContent.js';
// import { MoviesContentFull } from '../movies-content/MoviesContentFull.js';
// import { ButtonMoviesDetailsChange } from '../../Library/Button/ButtonMoviesDetailsChange.js'
import { AsideTitle } from './AsideTitle.js'
// import { MovieSort } from '../MovieSort.js'
import { ButtonGoTo } from '../../../../generic/button/ButtonGoTo.js';


import { API } from '../../../../api/API.js'
import { getAPI, dataAPI } from '../../../../api/getAPI.js';
import { MediaItems } from '../../../../lib/MediaItems.js'
import { getMapRender } from '../../../../lib/GetMapRender.js'
import { MovieLatest } from '../../../../lib/Filters.js'

import './AsideBlock.css';

export const AsideBlock = (props) => {
    return (
        <>
            <div className='aside-block'>

                <div className='aside-section'>
                    <div className='aside-section__title'>
                        <AsideTitle
                            title="смотрят"
                            preTitle="сейчас" />
                    </div>
                    <div className='aside-section__button'>
                        <ButtonGoTo text='Все фильмы' linkTo={"/people"}/>
                    </div>
                    <div className='aside-section__API'>
                        <API
                            switchType={`aside`}
                            getAPI={getAPI(dataAPI.type[0], dataAPI.option[3], 1)}
                            flag={true}
                            renderMap={getMapRender}
                            renderCard={MediaItems.movieCard}
                        />
                    </div>
                </div>
                <div className='aside-section'>
                    <div className='aside-section__title'>
                        <AsideTitle
                            title="Премьеры"
                            preTitle="фильмов" />
                    </div>
                    <div className='aside-section__button'>
                        <ButtonGoTo text='Все премьеры' linkTo={"/people"} />
                    </div>
                    <div className='aside-section__API'>
                        <API
                            switchType={`latest`}
                            getAPI={getAPI(dataAPI.type[0], dataAPI.option[0], 1)}
                            flag={true}
                            renderMap={getMapRender}
                            renderCard={MediaItems.movieCard}
                            filter={MovieLatest}
                        />
                    </div>

                </div>



                {/* ---------Реклама--------- */}
                <div className='section-movie__aside-advertising'>
                    <div className='aside-advertising__img'></div>
                </div>
            </div>

        </>
    )
}