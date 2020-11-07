import React from 'react';

import { Route } from 'react-router-dom';

import MoviesSection from './main-files/MoviesSection.js';
import MoviesPage from './main-files/MoviesPage.js';



export class SectionMoviesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            flagDropDown: false,
        };
        this.sortRef = React.createRef()
        this.sortButton = React.createRef()
    }
    // ------------------------Закрытие dropDown на клик в любое место---------------
    movieSortHandler = () => {
        this.setState({
            flagDropDown: !this.state.flagDropDown
        })
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside = e => {
        // console.log(e.composedPath())
        if (this.state.flagDropDown && !e.composedPath().includes(this.sortRef?.current) && !e.composedPath().includes(this.sortButton?.current)) {
            this.setState({ flagDropDown: false })
        }
    }
    // ------------------------конец//Закрытие dropDown на клик в любое место---------------

    render() {
        // console.log(this.state.flagDropDown);
        return (
            <>
                <Route path='/' exact>
                    <MoviesSection
                        togleFlag={this.props.togleFlag}
                        onToggleMoviesDetails={this.props.onToggleMoviesDetails}
                        page={this.state.page}
                        //--Dropdown
                        flagDropDown={this.state.flagDropDown}
                        movieSortHandler={this.movieSortHandler}
                        sortRef={this.state.sortRef}
                        sortButton={this.state.sortButton}
                    />
                </Route>
                <Route path='/movies/:name' exact>
                    <MoviesPage
                        togleFlag={this.props.togleFlag}
                        onToggleMoviesDetails={this.props.onToggleMoviesDetails}
                        page={this.state.page}
                        //--Dropdown
                        flagDropDown={this.state.flagDropDown}
                        movieSortHandler={this.movieSortHandler}
                        sortRef={this.state.sortRef}
                        sortButton={this.state.sortButton}
                    />
                </Route>
                <Route path='/TVs/:name' exact>
                    <MoviesPage
                        togleFlag={this.props.togleFlag}
                        onToggleMoviesDetails={this.props.onToggleMoviesDetails}
                        page={this.state.page}
                        //--Dropdown
                        flagDropDown={this.state.flagDropDown}
                        movieSortHandler={this.movieSortHandler}
                        sortRef={this.state.sortRef}
                        sortButton={this.state.sortButton}
                    />
                </Route>


            </>

        );
    }
}