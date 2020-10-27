import React from 'react';
import { withRouter } from 'react-router-dom';


class API extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIresult: [],
            isLoading: true,
            // arr_response: [],
            // idAPI: [],
            // i: [],

        }
        // console.log(props);
    }

   

    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.getAPI.then(API => {
            // console.log(API.data.results);
            const APIresult = API.data.results;
            // const idAPI = API.data.results.map(el => el.id)

            this.setState({ APIresult, isLoading: false })


          


            // if (this.props.switchType === `upcoming`) {
            //     const api_arr = APIresult.map(el => (getAPIbyID(`movie`, el.id)))
            //     Promise.all(api_arr).then(([...arr_response]) => {
            //         this.setState({ arr_response })
            //     })

            // }

            // const api_arr = APIresult.map(el => (getAPIbyID(`movie`, el.id)))
            // Promise.all(api_arr).then(([...arr_response]) => {
            //     this.setState({ arr_response })
            // })



            // const api_arr = APIresult[i](el => (getAPIbyID(`movie`, el.id)))
            // Promise.all(api_arr).then(([...arr_response]) => {
            //     this.setState({ arr_response })
            // })




        });

    }
    componentDidUpdate(prevProps) {
        // console.log(prevProps);
        if (this.props.trendType !== prevProps.trendType) { // !!! срвнивание пропсов
            this.props.getAPI.then(API => {
                // console.log(API.data.results);
                const APIresult = API.data.results;
                this.setState({ APIresult })
            });
        }
    }


    swichContent = option => {
        const { APIresult } = this.state
        const { renderMap, renderCard, flag, filter} = this.props
        switch (option) {
            case `upcoming`:
                return flag ?
                    renderMap(APIresult.slice(0, 5), renderCard)
                    // renderMap(filter(APIresult).slice(0, 5), renderCard)

                    : renderMap(APIresult, renderCard);
            case `popular`:
                return flag ?
                    renderMap(APIresult.slice(0, 9), renderCard)
                    : renderMap(APIresult, renderCard);
            case `trending`:
                return flag ?
                    renderMap(APIresult, renderCard[0])
                    : renderMap(APIresult, renderCard[1]);
            case `aside`:
                return flag ?
                    renderMap(APIresult.slice(0, 1), renderCard)
                    : renderMap(APIresult, renderCard);
            case `latest`:
                return flag ?
                    renderMap(filter(APIresult).slice(0, 2), renderCard)
                    : renderMap(APIresult, renderCard);
            default:
                break;
        }
    }

    render() {
        // console.log(this.state.APIresult);
        // console.log(this.state.i);

        // console.log(this.state.arr_response);
        const { switchType } = this.props
        const { isLoading } = this.state
        return !isLoading ? (
            <>
                {
                    this.swichContent(switchType)
                }
            </>
        ) : 'Loading...'
    }
}
export default withRouter(API);