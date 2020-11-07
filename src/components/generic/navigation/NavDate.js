import React from 'react';
import { BsFillLightningFill, BsFillBarChartFill, BsEyeFill} from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";

export const NavDate = {
    header: [
        {
            items: 'Фильмы',
            downItems: [
                { name: 'Новинки',ico: <BsFillLightningFill />, link: '/movies/upcoming', color: {color: '#CCAB29'}}, // done
                { name: 'Популярные', ico: <BsFillBarChartFill/>, link: '/movies/popular', color: {color: '#B34924'}},
                { name: 'Рекомендуем', ico: <FaThumbsUp/>, link: '/movies/top_rated', color: {color: '#C87028'}},
                { name: 'Смотрят сейчас', ico: <BsEyeFill />, link: '/movies/now_playing', color: {color: '#5AA624'}}, // done
            ],
        },
        {
            items: 'Сериалы',
            downItems: [
                // { name: 'Новинки', ico: <BsFillLightningFill />, link: '/tv/upcoming', color: {color: '#CCAB29'}},
                { name: 'Популярные', ico: <BsFillBarChartFill/>, link: '/TVs/popular', color: {color: '#B34924'}},
                { name: 'Рекомендуем', ico: <FaThumbsUp/>, link: '/TVs/top_rated', color: {color: '#C87028'}},
                { name: 'Смотрят сейчас', ico: <BsEyeFill />, link: '/TVs/on_the_air', color: {color: '#5AA624'}},
            ],
        },
        {
            items: 'Люди',
            downItems: [
                { name: 'Популярные', ico: <BsFillBarChartFill/>, link: '/people', color: {color: '#B34924'}}, // done
            ],
        },
    ]



}