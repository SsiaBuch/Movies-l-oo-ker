import React from 'react';
import { SectionTitle } from '../../../../generic/section-title/SectionTitle.js';
import { Search } from '../../../../generic/search/Search.js';
import { ButtonGoTo } from '../../../../generic/button/ButtonGoTo.js';

import  API  from '../../../../api/API.js';
import { getAPI, dataAPI } from '../../../../api/getAPI.js';
import { getMapRender } from '../../../../lib/GetMapRender.js';
import { MediaItems } from '../../../../lib/MediaItems.js';

import { Link, withRouter } from 'react-router-dom';

const PeopleSection = (props) => {
    // console.log(props);
    return (
        <div className='section'>
            <div className='container'>
                <div className='section__container section-people'>
                    <div className='section-people__header'>
                        <div className='section-people__title'>
                            <Link to={props.name}>
                                <SectionTitle
                                    title='Актеры'
                                    logo="section-people__logo"
                                />
                            </Link>
                            <Search
                                searchStyle="section-people__search"
                                searchPlaceholder="Поиск по актерам ..."
                            />
                        </div>
                        <div className='section-people__info'>Топ самых популярных актеров.</div>
                    </div>

                    <div className='section-people__API'>
                        <API
                            switchType={dataAPI.option[1]} // popular
                            getAPI={getAPI(dataAPI.type[2], dataAPI.option[1], 1)} // person/popular
                            flag={true}
                            renderMap={getMapRender}
                            renderCard={MediaItems.peopleCard}
                            // id={props.id}
                            onHandleAPIbyID={props.onHandleAPIbyID}
                        />
                    </div>

                    <div className='section-people__button'>
                        <ButtonGoTo
                            text='Все актеры'
                            // onClick={() => props.history.push(props.name.toLowerCase())}
                            linkTo={props.name}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(PeopleSection)