import React, { Component } from 'react';
import { HeaderContainer } from './components/common/header/HeaderContainer.js';
import { MainContainer } from './components/common/main/MainContainer.js';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <>
                <HeaderContainer />
                <MainContainer />
                {/* <Footer />  */}
            </>
        );
    }
}
