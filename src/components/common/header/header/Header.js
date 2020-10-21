import React from 'react';
import './Header.css'
import { Logo } from '../../../generic/logo/Logo.js';
import { NavItems } from '../../../generic/navigation/NavItems.js'
import { Navigation } from '../../../generic/navigation/Navigation.js';
import { Search } from '../../../generic/search/Search.js';
import { getMapRender } from '../../../lib/GetMapRender.js'
import { RandomFilms } from '../../../generic/random-films/RandomFilms.js'
import { Route } from 'react-router-dom';

export const Header = (props) => {
    return (
        <header className='header' style={props.headerColor} >

            <div className='container'>
                <Route path='/' exact><RandomFilms /></Route>
                
                <div className='header__content'>
                    <Logo logoSize="header__logo" />
                    <div className='header__unite'>
                        <Navigation
                            getMapRender={getMapRender(['Фильмы', 'Сериалы', 'Люди'], NavItems.header)}
                            navStyle="header__nav"
                        />

                        <Search
                            searchStyle="header__search"
                            searchPlaceholder="Что ищем?"
                        />

                    </div>

                    {/* ---------в разработке---------- */}
                    <div className='profile'></div>
                    {/* ---------в разработке---------- */}
                </div>
            </div>
        </header>
    )
}





