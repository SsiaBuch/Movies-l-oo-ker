import React from 'react';
import './MainBlock.css';
import { ButtonMoviesDetailsChange } from '../../../../generic/button/ButtonMoviesDetailsChange.js'
import { SectionTitle } from '../../section-title/SectionTitle.js';
import { MovieSort } from '../../../../generic/movie-sort/MovieSort.js';
import { Navigation } from '../../../../generic/navigation/Navigation.js';
import { NavItems } from '../../../../generic/navigation/NavItems.js';
import { API } from '../../../../api/API.js'

import { getMapRenderFull } from '../../../../lib/GetMapRender.js'
import { Route } from 'react-router-dom';

export const MainBlock = (props) => {
    // console.log(props);
    return (
        <>
            <ButtonMoviesDetailsChange
                flag={props.togleFlag}
                onClick={props.onToggleMoviesDetails}
            />

            <div className='main-block' style={props.sizeBlock}>
                {/* <Route path=''>
                    <div style={{ marginTop: 20, fontSize: 12, color: '#818181', }}>Главная / Актеры</div>
                </Route> */}


                <div className='main-block__header'>
                    <div className='main-block__title'>
                        <SectionTitle
                            title={props.sectionTitle}
                            logo="main-block__logo"
                        />
                        <MovieSort />
                    </div>

                    {/* ОПИСАНИЕ: меняется в зависимости откуда клик */}
                    {/* <Route path=''>
                        <div className='main-block__info'>{props.sectionInfo}</div>
                    </Route> */}

                    <Route path='/' exact>
                        <Navigation
                            getMapRender={getMapRenderFull(
                                props.navList,
                                NavItems.sectionNav,
                                props.onToggleMoviesNavigation,
                                props.defaultItem, 'main-block__nav_active')}
                            navStyle='main-block__nav'
                        />
                    </Route>
                </div>

                <div className='main-block__API'>
                    <API
                        switchType={props.switchType}
                        getAPI={props.getAPI}
                        flag={props.togleFlag}
                        renderMap={props.renderMap}
                        renderCard={props.renderCard}
                        trendType={props.trendType}
                    />
                </div>
            </div>
        </>

    )
}