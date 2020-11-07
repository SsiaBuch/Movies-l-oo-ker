import React from 'react';
import { SectionTitle } from '../../../../generic/section-title/SectionTitle.js';
import Search from '../../../../generic/search/Search.js';
import API from '../../../../api/API.js';
import { getAPI, dataAPI } from '../../../../api/getAPI.js';
import { getMapRender } from '../../../../lib/GetMapRender.js';
import { MediaItems } from '../../../../lib/MediaItems.js';
import { SearchItems } from '../../../../lib/SearchItems.js'
import { withRouter } from 'react-router-dom';


const PeoplePage = (props) => {
    // console.log(props);
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
                            //  link={}
                            />

                        </div>
                        <div className='section-people__info'>
                            <div>Харизматичные, привлекательные, загадочные, актеры о которых грезят все.</div>
                            <div>Они достигли успеха в своей профессии, смогли проявить свой талант, создали немало прекрасных, запоминающихся образов на экранах.</div>
                        </div>
                    </div>
                    <div className='section-people__API'>
                        <API
                            switchType={dataAPI.option[1]} // popular
                            getAPI={getAPI(dataAPI.type[2], dataAPI.option[1], 1)} // person/popular
                            flag={!true}
                            renderMap={getMapRender}
                            renderCard={MediaItems.peopleCardFull}
                            onHandleAPIbyID={props.onHandleAPIbyID}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(PeoplePage)