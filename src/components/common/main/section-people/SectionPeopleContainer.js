import React from 'react';
import './SectionPeopleContainer.css';

import { Route } from 'react-router-dom';

import PeopleSection from './people-files/PeopleSection.js';
import PeoplePage from './people-files/PeoplePage.js';

export const SectionPeopleContainer = (props) => {


    return (
        <>
            <Route path='/' exact>
                <PeopleSection 
                name='/people' 
                />
            </Route>

            <Route path='/:name' exact>
                <PeoplePage />
            </Route>
        </>
    );
}
