import React, { Component } from 'react';
import { HeaderContainer } from './components/common/header/HeaderContainer.js';
import { MainContainer } from './components/common/main/MainContainer.js';
import { Footer } from "./components/common/footer/Footer.js";
import { ButtonOnTop } from './components/generic/button/ButtonOnTop.js';

import axios from 'axios';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myInputValue: '',
            flagShow: false,

            // APIsearchPeople: [],
            searchResult: [],

            option: '',

        };
        // console.log(props);
    }
    // ------------------------Работа поисковой строки---------------
    myHandleInputChange = e => {
        // console.log(e.target.value.length, typeof (e.target.value));
        if (e.target.value.length === 0) {
            this.setState({ myInputValue: [], flagShow: false });

        } else {
            axios.get(`https://api.themoviedb.org/3/search/person?api_key=90fb7095127ff386353f1b685ff0f2fe&language=ru&query=${e.target.value}`)
                .then(API => {
                    // console.log(API);
                    const searchResult = API.data.results;
                    this.setState({ searchResult })
                    // const api_arr = APIsearchPeople.map(el => (getAPIbyID(`person`, el.id)))
                    // Promise.all(api_arr).then(([...searchResult]) => {
                    //     // const searchResult = searchResult1.data

                    //     this.setState({ searchResult })
                    // })
                })
            this.setState({ flagShow: true })
        }
        this.setState({
            myInputValue: e.target.value,
        });
    };

    myOptionListener = (param) => {
        this.setState({ option: param })
    }




    render() {
        // console.log(this.state.searchResult);
        return (
            <>
                <HeaderContainer />
                <MainContainer
                    //--Search
                    myInputValue={this.state.myInputValue}
                    myHandleInputChange={this.myHandleInputChange}
                    flagShow={this.state.flagShow}
                    searchResult={this.state.searchResult}
                />
                <Footer />

                <ButtonOnTop />
            </>
        );
    }
}
