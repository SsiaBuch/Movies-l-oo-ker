import React from 'react';
import './SectionPeople.css';
import { SectionTitle } from '../section-title/SectionTitle.js';
import { Search } from '../../../generic/search/Search.js';
import { BreadCrumb } from '../../../generic/breadcrumbs/BreadCrumb.js'
import { API } from '../../../api/API.js';
import { getAPI, dataAPI } from '../../../api/getAPI.js';
import { ButtonGoTo } from '../../../generic/button/ButtonGoTo.js';
import { getMapRender } from '../../../lib/GetMapRender.js';
import { Route, withRouter } from 'react-router-dom';



const SectionPeople = (props) => {
    console.log(props);
    return (
        <div className='section'>
            <div className='container'>
                <div className='section__container section-people'>

                    <div className='section-people__header'>

                        <Route path='/:name'>
                           <BreadCrumb name={props.name}/>
                        </Route>

                        <div className='section-people__title'>
                            <SectionTitle
                                title='Актеры'
                                logo="section-people__logo"
                            />
                            <Search
                                searchStyle="section-people__search"
                                searchPlaceholder="Поиск по актерам ..."
                            />
                        </div>
                        <div className='section-people__info'>{props.sectionInfo}</div>
                    </div>

                    <div className='section-people__API'>
                        <API
                            switchType={dataAPI.option[1]} // popular
                            getAPI={getAPI(dataAPI.type[2], dataAPI.option[1], 1)} // person/popular
                            flag={props.flag}
                            renderMap={getMapRender}
                            renderCard={props.renderCard}
                            // onClick={() => props.history.push('актеры/' + props.nameURL.toLowerCase())}
                        />
                    </div>

                    <Route path='/' exact>
                        <div className='section-people__button'
                            onClick={() => props.history.push(props.nameURL.toLowerCase())}
                        >
                            <ButtonGoTo

                                // linkTo={"/актеры"}
                                text='Все актеры' />
                        </div>
                    </Route>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SectionPeople)