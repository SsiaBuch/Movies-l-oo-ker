import React from 'react';
import { SectionMoviesContainer } from './section-movies/SectionMoviesContainer.js'
import { SectionPeopleContainer } from './section-people/SectionPeopleContainer.js'

import DetailsCard from '../../lib/DetailsCard.js';
import SearchCard from '../../lib/SearchCard.js'
import RandomFilm from '../../generic/random-films/RandomFilm.js'
import { Route } from 'react-router-dom';


export class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            togleFlag: false,
        }
    }
    // Переключатель: постер фильма // название => постер фильма // краткая информация
    toggleMoviesDetails = () => {
        this.setState({
            togleFlag: !this.state.togleFlag,
        })
    }

    render() {
        // console.log(this.props.searchResult);
        return (
            <div className='mainContainer'>

                <SectionPeopleContainer
                    //--Search
                    myInputValue={this.props.myInputValue}
                    myHandleInputChange={this.props.myHandleInputChange}
                    searchResult={this.props.searchResult}
                    flagShow={this.props.flagShow}
                />
                <SectionMoviesContainer
                    togleFlag={this.state.togleFlag}
                    onToggleMoviesDetails={this.toggleMoviesDetails}

                />

                <Route path='/movie/:name' exact>
                    <DetailsCard />
                </Route>
                <Route path='/tv/:name' exact>
                    <DetailsCard />
                </Route>
                <Route path='/people/:name' exact>
                    <DetailsCard />
                </Route>
                <Route path='/search/:name' exact>
                    <SearchCard />
                </Route>
                <Route path='/random' exact>
                    <RandomFilm />
                </Route>



            </div>
        );
    }
}