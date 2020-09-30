import React from 'react';
import BrandLogo from './logo.png';
import { NavLink } from 'react-router-dom';

export const Logo = (props) =>
    <NavLink
        to='/'
        className={props.logoStyle}
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + BrandLogo + ')',
        }}
    />