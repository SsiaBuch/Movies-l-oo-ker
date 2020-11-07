import React from 'react';
import { API, getApiTranding } from './DataAPI.js';

export class TrendingMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendMovies: [],
        }
        // console.log(this.props.defaultItem, this.props.trendType);

    }

    componentDidMount() {
        getApiTranding(API.TRENDING_TYPE[this.props.trendType], `week`, this.props.trendPage).then(trending => {
            console.log(trending.data.results);
            const trendMovies = trending.data.results;
            this.setState({ trendMovies })
        });
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (this.props.trendType !== prevProps.trendType) { // !!! срвнивание пропсов
            getApiTranding(API.TRENDING_TYPE[this.props.trendType], `week`, this.props.trendPage).then(trending => {
                // console.log(upcoming);
                const trendMovies = trending.data.results;
                this.setState({ trendMovies })
            });
        }
    }

    render() {
        // console.log(this.props.defaultItem, this.props.trendType);
        const { trendMovies } = this.state
        const { getMapRender, render } = this.props
        return (
            <>
                {
                    getMapRender(trendMovies, render)
                }
            </>
        );
    }
}