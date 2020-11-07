import React from 'react';
import { Navigation } from './Navigation.js'
import { getMapRender } from '../../lib/GetMapRender.js'
import { NavItems } from '../navigation/NavItems.js'


export class ToggleNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: this.props.navList,
            defaultItem: 'Все категории',
            trendType: 0,
        }
    }

    // Переключатель: новинки => фильмы => сериалы и тд.
    toggleMoviesNavigation = (event) => {
        // console.log(event.target);
        event.preventDefault();
        this.setState({
            defaultItem: event.target.value,
        })
        switch (event.target.value) {
            case this.state.navList[0]: this.setState({ trendType: 0 }); break;
            case this.state.navList[1]: this.setState({ trendType: 1 }); break;
            case this.state.navList[2]: this.setState({ trendType: 2 }); break;
            default:
                break;
        }
    }

    render() {
        const { navList, defaultItem } = this.state
        return (
            <Navigation
                getRender={getMapRender(
                    navList,
                    NavItems.sectionNav,
                    this.toggleMoviesNavigation,
                    defaultItem,
                    this.props.style)}
                navStyle={this.props.navStyle}
            />
        );
    }
}