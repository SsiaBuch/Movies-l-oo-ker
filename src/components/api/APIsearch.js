import React from 'react';
import axios from 'axios';
import {getMapRender} from '../lib/GetMapRender.js'
import {MediaItems} from '../lib/MediaItems.js'

export class APIsearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIresult: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=90fb7095127ff386353f1b685ff0f2fe&language=ru&query=${this.props.searchParam}`)
        .then(API => {
            // console.log(API);
            const APIresult = API.data.results;
            this.setState({ APIresult, isLoading: false})
        })
    }

    render() {
       console.log(this.state.APIresult);
    //    const { renderCard } = this.props
       const { APIresult, isLoading } = this.state
       return !isLoading ? (
           <>
               {
                   getMapRender(APIresult, MediaItems.peopleCardFull)
               }
           </>
       ) : 'Loading...'
    }
}