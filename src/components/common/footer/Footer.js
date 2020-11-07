import React from 'react';
import './Footer.css';
import { Navigation } from "../../generic/navigation/Navigation.js";
import { getMapRender } from "../../lib/GetMapRender.js";
import { NavItems } from "../../generic/navigation/NavItems.js";
import { NavLink } from 'react-router-dom';
import {ClickOnTopSmooth} from '../../lib/ClickOnTop.js';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__container'>
                    <div className=''>
                        <span className='footer__text'>©  2020 Кинопортал </span>
                        <NavLink to='/' exact onClick={ClickOnTopSmooth}>
                            <span className='footer__logo'>L[oo]ker</span>
                        </NavLink>
                    </div>
                    <div className='footer__nav'>
                        <Navigation
                            getRender={getMapRender(['Реклама', 'Соглашение', 'О проекте'], NavItems.footerNav, ['/info'])}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
