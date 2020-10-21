import React from 'react';
import './Banner.css'
import { API } from '../../../api/API.js'
import { getAPI, dataAPI } from '../../../api/getAPI.js';
import { MediaItems } from '../../../lib/MediaItems.js';
import { MovieAfterNowDate } from '../../../lib/Filters.js';
import { getMapRender } from '../../../lib/GetMapRender.js';

export const Banner = () => {
    // console.log();
    return (
        < div className='banner banner_background'>
            <div className='container'>
                <div className=' banner__content'>
                    <span className='banner__invite'>Добро пожаловать</span>
                    <div className='banner__info'>
                        <h1>Миллионы фильмов, сериалов и людей.</h1>
                        <span>Исследуйте сейчас.</span>
                    </div>
                </div>
                <div className='banner__API'>
                    <API
                        switchType={dataAPI.option[0]} // upcoming
                        getAPI={getAPI(dataAPI.type[0], dataAPI.option[0], 1)} // movie/upcoming
                        flag={true}
                        renderMap={getMapRender}
                        renderCard={MediaItems.bannerCard}
                        filter={MovieAfterNowDate}
                    />
                </div>
            </div>
        </div >
    )
}