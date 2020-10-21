import React from 'react';
import { API, getApiFromPopular } from './DataAPI.js';

export class PopularAPI extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {

        popularAPI: [],
        page: 1,
    }
    componentDidMount() {
        getApiFromPopular(this.props.type, API.POPULAR, this.state.page).then(pop_person => {
            // console.log(upcoming);
            const popularAPI = pop_person.data.results;
            this.setState({ popularAPI })
        });

    }
    render() {
        const { popularAPI } = this.state
        const { onMapRender, render, slice } = this.props
        return (
            <>
                { slice ?
                    onMapRender(popularAPI.slice(0, 9), render)
                    : onMapRender(popularAPI, render)
                }
            </>
        );
    }
}