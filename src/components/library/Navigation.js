import React from 'react';
import './navigation.css'

export const Navigatin = (props) => (
    <nav className={props.navStyle}>
        <ul className='nav'>
            <li className='nav__item'><a href='*'>Фильмы</a></li>
            <li className='nav__item'><a href='*'>Сериалы</a></li>
            <li className='nav__item'><a href='*'>ТВ-программы</a></li>
            <li className='nav__item'><a href='*'>Случайный фильм!</a></li>
        </ul>
    </nav>
)