import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle.js';
import { Search } from '../../Library/Search/Search.js';
import { PeopleContent } from '../people-content/PeopleContent.js';
import './sectionPeople.css';
import { BsChevronDoubleRight } from "react-icons/bs";



export const SectionPeople = (props) =>
    <div className='section-people'>
        <div className='container'>
            <div className='section-people_main-block'>
                <div className='section-people__header'>
                    <div className='section-people__title'>
                        <SectionTitle
                            title="Актеры"
                            logo="section-people__logo"
                        />
                        <Search
                            searchStyle="section-people__search"
                            searchPlaceholder="Поиск по актерам ..."
                        />
                    </div>
                    <div className='section-people__info'>
                        <span>Топ самых популярных актеров.</span>
                    </div>
                </div>
                <div className='section-people__movie-content'>
                    <PeopleContent
                        people={props.popularPerson.slice(0, 9)}
                    />
                </div>
                <div className='section-people__button'>
                    <button>
                        <span className='section-people__button-text'>Все актеры </span>
                        <BsChevronDoubleRight className="section-people__button-icon" />
                    </button>
                </div>
            </div>
        </div>
    </div>