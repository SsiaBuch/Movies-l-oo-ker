import React from 'react';
import BrandLogo from './logo.png';
import { Link } from 'react-router-dom';

export const Logo = (props) =>
    <Link id='onTop'
        to='/'
        className={props.logoSize}
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + BrandLogo + ')',

        }}
    />