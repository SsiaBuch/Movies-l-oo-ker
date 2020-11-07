import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonRandomFilm.css'

export const ButtonRandomFilm = () => (
    <Link to='/random' className='random__buttom'>Случайный фильм!</Link>
)