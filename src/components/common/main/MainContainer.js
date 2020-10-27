import React from 'react';
import { SectionMovies } from './section-movies/SectionMovies.js'
import { SectionPeopleContainer } from './section-people/SectionPeopleContainer.js'

import DetailsCard from './DetailsCard.js';

import { Route } from 'react-router-dom';


export class MainContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }

    render() {
        return (
            <div className='mainContainer'>

                <SectionPeopleContainer />

                <SectionMovies />

                <Route path='/:name/:name' exact>
                    <DetailsCard />
                </Route>
            </div>
        );
    }
}