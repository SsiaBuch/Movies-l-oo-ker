import React from 'react';
import { withRouter } from 'react-router-dom';


class API extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIresult: [],
            isLoading: true,
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.getAPI.then(API => {
            // console.log(API.data.results);
            const APIresult = API.data.results;
            this.setState({ APIresult, isLoading: false })
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
        const { renderMap, renderCard, flag, filter, switchType, flagDetails } = this.props
        switch (option) {
            case `upcoming`:
                return flag || flagDetails ?
                    renderMap(filter(APIresult).slice(0, 5), renderCard)
                    : renderMap(APIresult, renderCard, switchType);
            case `popular`:
                return flag ?
                    renderMap(APIresult.slice(0, 9), renderCard, switchType)
                    : renderMap(APIresult, renderCard, switchType);
            case `trending`:
                return flag ?
                    renderMap(APIresult, renderCard[0], switchType)
                    : renderMap(APIresult, renderCard[1], switchType);
            case `aside`:
                return flag ?
                    renderMap(APIresult.slice(0, 1), renderCard, switchType)
                    : renderMap(APIresult, renderCard, switchType);
            case `latest`:
                return flag ?
                    renderMap(filter(APIresult).slice(0, 2), renderCard, switchType)
                    : renderMap(APIresult, renderCard, switchType);
            default:
                break;
        }
    }

    render() {
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




// const api_arr = APIresult.map(el => (getAPIbyID(`movie`, el.id)))
            // Promise.all(api_arr).then(([...arr_response]) => {
            //     this.setState({ arr_response })
            // })



            // const api_arr = APIresult[i](el => (getAPIbyID(`movie`, el.id)))
            // Promise.all(api_arr).then(([...arr_response]) => {
            //     this.setState({ arr_response })
            // })
