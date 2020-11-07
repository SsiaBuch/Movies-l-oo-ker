import React from 'react';
import { NavLink } from 'react-router-dom';
import './SearchItems.css'

export const SearchItems = {
    people: el => {
        if (el.profile_path !== null) {
            return  (
                <NavLink
                to={`/people/${el.id}-${el.name.toLowerCase().replace(/\s/g, '-')}`}
                className='searchCard searchCard__people_size'
            >
                <img
                    className='searchCard__img'
                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                    alt={el.name} />
                <h3 className='searchCard__peopName'>
                    {el.name}
                </h3>
            </NavLink>
            )
        } else { 
            return null
        }
    },
}