import React from 'react';
import './MainBlock.css';
import { ButtonMoviesDetailsChange } from '../../../../generic/button/ButtonMoviesDetailsChange.js'
import { SectionTitle } from '../../../../generic/section-title/SectionTitle.js';

import { Navigation } from '../../../../generic/navigation/Navigation.js';
import { NavItems } from '../../../../generic/navigation/NavItems.js';
import API from '../../../../api/API.js'
import { getMapRender } from '../../../../lib/GetMapRender.js'
import { Route, withRouter } from 'react-router-dom';
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const MainBlock = (props) => {
    // console.log(props);
    return (
        <>
            <ButtonMoviesDetailsChange
                flag={props.togleFlag}
                onClick={props.onToggleMoviesDetails}
            />
            <div className='main-block' style={{ width: '77%' }}>
                <div className='main-block__header'>
                    <div className='main-block__title'>
                        <SectionTitle
                            title={props.sectionTitle}
                            logo="main-block__logo"
                        />

                        <div className='movie-sort'>
                            <div className='movie-sort__name'>Сортировка</div>
                            <div className='movie-sort_flex'>
                                <div className='movie-sort__choice' onClick={props.movieSortHandler} ref={props.sortButton}>По популярности</div>

                                {props.flagDropDown ? <div className='choice' ref={props.sortRef}>
                                    {['По популярности', 'По дате', 'По годам', 'По алфавиту'].map((el, i) =>
                                        <div key={i} className='choice__variant'>{el}</div>
                                    )}
                                </div> : null}

                            </div>
                            <BsChevronDoubleDown className='movie-sort__icon' />
                            <BsChevronDoubleUp className='movie-sort__icon' />
                        </div>
                    </div>
                    <Route path='/' exact>
                        <Navigation
                            getRender={getMapRender(
                                props.navList,
                                NavItems.sectionNav,
                                props.onToggleMoviesNavigation,
                                props.defaultItem, 'main-block__nav_active')}
                            navStyle='main-block__nav'
                        />
                        {/* <ToggleNavigation
                            navStyle='main-block__nav'
                            navList={['Все категории', 'Фильмы', 'Сериалы']}
                            style='main-block__nav_active'
                        /> */}
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
export default withRouter(MainBlock);