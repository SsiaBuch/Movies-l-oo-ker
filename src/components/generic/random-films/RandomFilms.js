import React from 'react';
import { Link } from 'react-router-dom';
import './randomFilms.css'

export const RandomFilms = () => (
    <Link to='/random' className='random__buttom'>Случайный фильм!</Link>
)