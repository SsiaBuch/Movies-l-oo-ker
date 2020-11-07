import React from 'react';
import MainBlockPage from '../main-block/MainBlockPage.js';
import AsideBlockFilter from '../aside-block/AsideBlockFilter.js';
import { getApiTrand, getAPI } from '../../../../api/getAPI.js';
import { MediaItems } from '../../../../lib/MediaItems.js'
import { getMapRender } from '../../../../lib/GetMapRender.js'
import { withRouter } from 'react-router-dom';



class MoviesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieType: props.match.params.name,
            URLname: props.match.url,
            title: {
                upcoming: 'Новинки',
                popular: 'Популярные',
                now_playing: 'Смотрят сейчас',
                trending: 'В тренде',
                top_rated: 'Рекомендуем',
                on_the_air: 'Смотрят сейчас'
            }
        }
        // console.log(props.match.url);
    }

    getMediaType = (param) => {
        if (param.search('people') !== -1) {
            return 'person'
        } else if (param.search('movies') !== -1) {
            return 'movie'
        } else if (param.search('TVs') !== -1) {
            return 'tv'
        }
    }


    getAPIrender = (option) => {
        if (option === 'trending') {
            return getApiTrand
        } else {
            return getAPI(this.getMediaType(this.state.URLname), option, 1)
        }

    }

    render() {
        const { movieType, title } = this.state
        // console.log(this.state.movieType)
        // console.log(this.getMediaType(this.state.URLname));
        return (
            <div className='section'>
                <div className='container'>
                    <div className='section__container' style={{ display: 'flex' }}>
                        <MainBlockPage
                            switchType='trending'
                            togleFlag={this.props.togleFlag}
                            onToggleMoviesDetails={this.props.onToggleMoviesDetails}
                            sectionTitle={title[movieType]}

                            getAPI={this.getAPIrender(movieType)}
                            renderMap={getMapRender}
                            renderCard={[MediaItems.movieCardFull, MediaItems.movieCard]}
                            flagDetails={false}

                            flagDropDown={this.props.flagDropDown}
                            movieSortHandler={this.props.movieSortHandler}
                            sortRef={this.props.sortRef}
                            sortButton={this.props.sortButton}
                        />

                        <AsideBlockFilter />

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MoviesPage);