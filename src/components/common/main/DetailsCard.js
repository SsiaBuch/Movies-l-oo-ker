import React from 'react';

import { APIbyID } from '../../api/APIbyID.js';
import { getAPIbyID } from '../../api/getAPI.js';
import { MediaItems } from '../../lib/MediaItems.js';

import { withRouter } from 'react-router-dom';

class DetailsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            URLname: this.props.history.location.pathname, //people /2888-will-smith
            id: this.props.history.location.pathname.split('-')[0].replace(/[^0-9]/gi, ''),
            // match.
        }
        console.log(props);
    }

    getTypeCard = (param) => {
        if (param.search('people') !== -1) {
            return 'person'
        } else if (param.search('upcoming') !== -1) {
            return 'movie'
        }
    }
    getRenderCard = (param) => {
        if (param.search('people') !== -1) {
            return MediaItems.peopleCardDetails
        } else if (param.search('upcoming') !== -1) {
            return MediaItems.movieCardFull
        }
    }



    render() {
        const { id, URLname} = this.state
        console.log(this.getTypeCard(URLname));

        return (
            // <div className='section'>
            <div className='container'>
                <div className='section__container'>


                    <APIbyID
                        getAPIbyID={getAPIbyID(this.getTypeCard(URLname), id)}
                        renderCard={this.getRenderCard(URLname)}
                    />
                </div>
            </div>
            // </div>
        );
    }
}
export default withRouter(DetailsCard);