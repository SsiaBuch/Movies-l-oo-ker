import React from 'react';
import './SectionPeopleContainer.css';
import { Route } from 'react-router-dom';
import PeopleSection from './people-files/PeopleSection.js';
import PeoplePage from './people-files/PeoplePage.js';

export class SectionPeopleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        // console.log(this.props.searchResult);
        return (
            <>
                <Route path='/' exact>
                    <PeopleSection name='/people'
                        //--Search
                        myInputValue={this.props.myInputValue}
                        myHandleInputChange={this.props.myHandleInputChange}
                        searchResult={this.props.searchResult}
                        flagShow={this.props.flagShow}
                    />
                </Route>
                <Route path='/people' exact>
                    <PeoplePage
                        //--Search
                        myInputValue={this.props.myInputValue}
                        myHandleInputChange={this.props.myHandleInputChange}
                        searchResult={this.props.searchResult}
                        flagShow={this.props.flagShow}
                    />
                </Route>
                {/* <Route path='/:name' exact>
                    <PeoplePage />
                </Route> */}
            </>
        );
    }
}