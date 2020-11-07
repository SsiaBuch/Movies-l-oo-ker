import React from 'react';
import { API, getApiString } from './DataAPI.js';

export class UpcomMovies extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {
        upcomMovie: [],
        page: 1,
    }
    componentDidMount() {
        getApiString(API.UPCOMING_MOVIE, this.state.page).then(upcoming => {
            // console.log(upcoming);
            const upcomMovie = upcoming.data.results;
            this.setState({ upcomMovie })
        });
    }
    render() {
        const { upcomMovie } = this.state
        const { flag, filter, render, getMapRender } = this.props
        return (
            <>
                {
                    flag ? getMapRender(filter(upcomMovie).slice(0, 5), render)
                        : getMapRender(upcomMovie, render)
                }
            </>
        );
    }
}