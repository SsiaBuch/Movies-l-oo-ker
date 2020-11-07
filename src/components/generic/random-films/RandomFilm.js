import React from 'react';
import { APIbyID } from '../../api/APIbyID.js';
import { getApiTrand, getAPIbyID } from '../../api/getAPI.js';
import { MediaItems } from '../../lib/MediaItems.js';
import { withRouter } from 'react-router-dom';

class RandomFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: [],
            i: this.detRandomID(20),
            isLoading: true,
            page: this.detRandomID(1000),
        }
        // console.log(props);
    }

    detRandomID = (param) => {
        let i = Math.floor(Math.random() * Math.floor(param))
        return i + 1
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        getApiTrand('movie', `week`, this.state.page)
            .then(API => {
                const ID = API.data.results.map(el => el.id);
                this.setState({ ID, isLoading: false })
            });
    }
    render() {
        const { isLoading, ID, i } = this.state

        return !isLoading ? (
            <div className='container' >
                <div className='section__container'>
                    <APIbyID
                        id={ID}
                        getAPIbyID={getAPIbyID('movie', ID[i])}
                        renderCard={MediaItems.movieCardFull}
                    />
                </div>
            </div>
        ): 'Loading...';
    }
}
export default withRouter(RandomFilm);