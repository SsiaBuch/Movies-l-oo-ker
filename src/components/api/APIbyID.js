import React from 'react';

export class APIbyID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIresult: [],
            isLoading: true,
        }
        console.log(props);
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.getAPIbyID.then(API => {
            // console.log(API.data.results);
            const APIresult = API.data;
            this.setState({ APIresult, isLoading: false })
        });
    }
    render() {
       console.log(this.state.APIresult);
       const { renderCard } = this.props
       const { APIresult, isLoading } = this.state
       return !isLoading ? (
           <>
               {
                   renderCard(APIresult)
               }
           </>
       ) : 'Loading...'
    }
}