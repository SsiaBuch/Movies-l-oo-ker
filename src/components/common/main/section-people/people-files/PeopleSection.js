import React from 'react';
import { SectionTitle } from '../../../../generic/section-title/SectionTitle.js';
import Search from '../../../../generic/search/Search.js';
import { ButtonGoTo } from '../../../../generic/button/ButtonGoTo.js';
import API from '../../../../api/API.js';
import { getAPI, dataAPI } from '../../../../api/getAPI.js';
import { getMapRender } from '../../../../lib/GetMapRender.js';
import { MediaItems } from '../../../../lib/MediaItems.js';
import { withRouter } from 'react-router-dom';
import { SearchItems } from '../../../../lib/SearchItems.js'

const PeopleSection = (props) => {
    // console.log(props.searchResult);
    return (
        <div className='section'>
            <div className='container'>
                <div className='section__container section-people'>
                    <div className='section-people__header'>
                        <div className='section-people__title'>
                            <SectionTitle
                                title='Актеры'
                                logo="section-people__logo"
                            />
                            <Search
                                searchStyle="section-people__search"
                                searchPlaceholder="Поиск по актерам ..."
                                myInputValue={props.myInputValue}
                                myHandleInputChange={props.myHandleInputChange}
                                APIsearch={props.searchResult.slice(0, 5)}
                                render={SearchItems.people}
                                flagShow={props.flagShow}
                            // link='/search'                            
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
                            linkTo={props.name}
                        // onClick={() => props.history.push(props.name.toLowerCase())}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(PeopleSection)