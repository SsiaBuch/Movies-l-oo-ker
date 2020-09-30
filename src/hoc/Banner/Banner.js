import React from 'react';
import './banner.css'

import { Header } from '../../components/Banner/Header/Header.js';
import { BanContent } from '../../components/Banner/banner-content/BanContent.js';

import { Route } from 'react-router-dom';


export const Banner = (props) =>
    <div className='banner'>
        <Header bannerMenuStyle="banner__menu_style" />
        <Route path='/'>
            <BanContent
                bannerImg="banner__img"
                upcomingMovie={props.upcomingMovie}
                movieFilterAfterNowDate ={props.movieFilterAfterNowDate}
            />
        </Route>


    </div>