import React from 'react';
import './SearchCard.css';
import { ButtonMoviesDetailsChange } from '../generic/button/ButtonMoviesDetailsChange.js'
import { SectionTitle } from '../generic/section-title/SectionTitle.js';
import { withRouter } from 'react-router-dom';
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
// import { AsideBlockEmpty } from '../common/main/section-movies/aside-block/AsideBlockEmpty.js'
import { APIsearch } from '../api/APIsearch.js'


const SearchCard = (props) => {
    console.log(props);
    return (
        <>
            {/* !!!!!!!!!!      переписать css */}


            <div className='section'>
                <div className='container'>
                    <div className='section__container' style={{ display: 'flex' }}>
                        <ButtonMoviesDetailsChange
                            flag={props.togleFlag}
                            onClick={props.onToggleMoviesDetails}
                        />
                        <div className='main-block' style={{ width: '77%' }}>

                            <div className='main-block__title'>
                                <SectionTitle
                                    title='Результаты поиска'
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
                            <div className='main-block__API'>
                                <APIsearch
                                    searchParam={props.match.params.name}
                                />
                            </div>
                        </div>

                        <div className='aside-block'> </div>

                    </div>
                </div>
            </div>

        </>

    )
}
export default withRouter(SearchCard);