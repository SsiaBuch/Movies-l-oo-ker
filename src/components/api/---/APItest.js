import React from 'react';
import axios from 'axios';


export class APItest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIresult: [],
            // isLoading: true,
        }
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=90fb7095127ff386353f1b685ff0f2fe&language=ru&query=ход+королевы`)
        .then(API => {
            console.log(API);
            const APIresult = API.data;
            this.setState({ APIresult})
        });
    }

    render() {
       console.log(this.state.APIresult);
    //    const { renderCard } = this.props
    //    const { APIresult, isLoading } = this.state
       return (
           <>
           </>
       )
    }
}