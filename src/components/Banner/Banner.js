import React from 'react';
import { Header } from './Header.js';
import { BanContent } from './BanContent.js'
import './banner.css'



export const Banner = (props) =>
    <div className='banner'>
        <Header bannerMenuStyle={'banner__menu_style'} />
        <BanContent bannerImg={'banner__img'}
            upcomingMovie={props.upcomingMovie} />
            
    </div>