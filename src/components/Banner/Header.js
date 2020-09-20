import React from 'react';
import { Logo } from '../library/Logo.js';
import { Navigatin } from '../library/Navigation.js';
import { Search } from '../library/Search.js';
import './header.css'

export const Header = (props) => 
    <header className={`header ${props.bannerMenuStyle}`}>
        <div className='conteiner'>
            <div className='header__content'>
                <Logo logoStyle={'header__logo'} />
                <Navigatin navStyle={'header__nav'} />
                <Search searchStyle={'header__search'} />
                
                {/* --- */}
                <div className='profile'></div>
                {/* --- */}
            </div>
        </div>
    </header>
