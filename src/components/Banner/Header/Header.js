import React from 'react';
import './header.css'

import { Logo } from '../../Library/Logo/Logo.js';
import { Navigation } from '../../Library/Navigation/Navigation.js';
import { Search } from '../../Library/Search/Search.js';

export const Header = (props) =>
    <header className={`header ${props.bannerMenuStyle}`}>
        <div className='container'>
            <div className='header__content'>
                <Logo logoStyle="header__logo" />
                <Navigation
                    navStyle="header__nav"
                    navList={['Фильмы', 'Сериалы', 'Люди']}
                    href={['/films', '/tv', 'people']} />
                <Search
                    searchStyle="header__search"
                    searchPlaceholder="Поиск ..."
                />
                {/* -- НА ДОРАБОТКЕ-- */}
                <div className='profile'></div>
                {/* -- НА ДОРАБОТКЕ-- */}
            </div>
        </div>
    </header>
