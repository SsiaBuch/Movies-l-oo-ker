import React from 'react';
import { MainBlock } from './main-block/MainBlock.js';
import { AsideBlock } from './aside-block/AsideBlock.js';

import { getApiTrand, dataAPI } from '../../../api/getAPI.js';
import { MediaItems } from '../../../lib/MediaItems.js'

import { getMapRender } from '../../../lib/GetMapRender.js'
import { Route } from 'react-router-dom';



export class SectionMovies extends React.Component {
    state = {
        togleFlag: false,
        navList: ['Все новинки', 'Фильмы', 'Сериалы'],
        defaultItem: 'Все новинки',
        trendType: 0,
        trendPage: 1,
    }
    // Переключатель: постер фильма // название => постер фильма // краткая информация
    toggleMoviesDetails = () => {
        this.setState({
            togleFlag: !this.state.togleFlag,
        })
    }
    // Переключатель: новинки => фильмы => сериалы и тд.
    toggleMoviesNavigation = (event) => {
        console.log(event.target);
        event.preventDefault();
        this.setState({
            defaultItem: event.target.value,
        })
        switch (event.target.value) {
            case this.state.navList[0]: this.setState({ trendType: 0 }); break;
            case this.state.navList[1]: this.setState({ trendType: 1 }); break;
            case this.state.navList[2]: this.setState({ trendType: 2 }); break;
            default:
                break;
        }
    }


    render() {
        // console.log(this.state.defaultItem, this.state.trendType);

        return (
            <Route path='/' exact>

                <div className='section'>
                    <div className='container'>
                        <div className='section__container' style={{ display: 'flex' }}>
                            <MainBlock
                                togleFlag={this.state.togleFlag}
                                onToggleMoviesDetails={this.toggleMoviesDetails}
                                onToggleMoviesNavigation={this.toggleMoviesNavigation}
                                navList={this.state.navList}
                                defaultItem={this.state.defaultItem}
                                trendPage={this.state.trendPage}
                                trendType={this.state.trendType}
                                onChangeMediaType={this.hendlerChangeMediaType}

                                sectionTitle={"Фильмы и сериалы"}
                                sectionInfo={"Топ самых популярных актеров."}

                                sizeBlock={{ width: '77%' }}

                                switchType={dataAPI.option[2]} // trending
                                getAPI={getApiTrand(dataAPI.trending_type[this.state.trendType], `week`, this.state.trendPage)} // trending
                                renderMap={getMapRender}
                                renderCard={[MediaItems.movieCardFull, MediaItems.movieCard]}
                            />

                            <AsideBlock />


                        </div>
                    </div>
                </div>
            </Route>

        );
    }
}