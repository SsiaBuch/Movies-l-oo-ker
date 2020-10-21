import React from 'react';
import SectionPeople from './section-people/SectionPeople.js'
import { SectionMovies } from './section-movies/SectionMovies.js'
import { MediaItems } from '../../lib/MediaItems.js';

import { Route } from 'react-router-dom';


export class MainContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }


    
    // }

    render() { 
        return (
            <div className='mainContainer'>

            <Route path='/' exact>
                <SectionPeople
                    flag={true}
                    renderCard={MediaItems.peopleCard}


                    nameURL='peoples'
                    // name='Актеры'
                    sectionInfo='Топ самых популярных актеров.' />
            </Route>


            <Route path='/:name' exact>
                <SectionPeople
                    flag={!true}
                    renderCard={MediaItems.peopleCardFull}


                    name={'Актеры'}
                    nameURL='111'
                    sectionInfo={
                        <div>
                            <div>Харизматичные, привлекательные, загадочные, актеры о которых грезят все.</div>
                            <div>Они достигли успеха в своей профессии, смогли проявить свой талант, создали немало прекрасных, запоминающихся образов на экранах.</div>
                        </div>
                    } />
            </Route>








            {/* <Route path='/people'>
                            <MainBlock
                                navList={this.state.navList}
                                defaultItem={this.state.defaultItem}
                                trendPage={this.state.trendPage}
                                trendType={this.state.trendType}
                                onChangeMediaType={this.hendlerChangeMediaType}

                                sectionTitle={"Актеры"}
                                sectionInfo={
                                    <div>
                                        <div>Харизматичные, привлекательные, загадочные, актеры о которых грезят все.</div>
                                        <div>Они достигли успеха в своей профессии, смогли проявить свой талант, создали немало прекрасных, запоминающихся образов на экранах.</div>
                                    </div>
                                }

                                sizeBlock={{ width: '100%' }}

                                switchType={dataAPI.option[1]} // popular
                                getAPI={getAPI(dataAPI.type[2], dataAPI.option[1], 1)} // person/popular
                                flag={!true}
                                renderMap={getMapRender}
                                renderCard={MediaItems.peopleCardFull}
                            />
                        </Route>

 */}


            <Route path='/'>
                <SectionMovies />
            </Route>
        </div>
        );
    }
}