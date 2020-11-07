import React from 'react';
import MainBlock from '../main-block/MainBlock.js';
import AsideBlockMovie from '../aside-block/AsideBlockMovie.js';
import { getApiTrand, dataAPI } from '../../../../api/getAPI.js';
import { MediaItems } from '../../../../lib/MediaItems.js'
import { getMapRender } from '../../../../lib/GetMapRender.js'
import { withRouter } from 'react-router-dom';


class MoviesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: ['Все категории', 'Фильмы', 'Сериалы'],
            defaultItem: 'Все категории',
            trendType: 0,
        }
        // console.log(props);
    }

    // Переключатель: новинки => фильмы => сериалы и тд.
    toggleMoviesNavigation = (event) => {
        // console.log(event.target);
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
        return (
            <div className='section'>
                <div className='container'>
                    <div className='section__container' style={{ display: 'flex' }}>
                        <MainBlock
                            togleFlag={this.props.togleFlag}
                            onToggleMoviesDetails={this.props.onToggleMoviesDetails}

                            onToggleMoviesNavigation={this.toggleMoviesNavigation}
                            navList={this.state.navList}
                            defaultItem={this.state.defaultItem}
                            trendType={this.state.trendType}
                            // onChangeMediaType={this.hendlerChangeMediaType}

                            sectionTitle={"Фильмы и сериалы"}
                            // sectionInfo={"Топ самых популярных актеров."}

                            sizeBlock={{ width: '77%' }}

                            switchType={dataAPI.option[2]} // trending
                            getAPI={getApiTrand(dataAPI.trending_type[this.state.trendType], `week`, this.props.page)} // trending
                            renderMap={getMapRender}
                            renderCard={[MediaItems.movieCardFull, MediaItems.movieCard]}


                            
                            flagDropDown={this.props.flagDropDown}
                            movieSortHandler={this.props.movieSortHandler}
                            sortRef={this.props.sortRef}
                            sortButton={this.props.sortButton}
                        />

                        <AsideBlockMovie />

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MoviesSection);