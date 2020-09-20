import React from 'react';
import './search.css'

export const Search = (props) => (
    <form className={props.searchStyle}>
            <input type='text' className='search__input' placeholder='Поиск ...' />
            <i className="fas fa-search search__icon" ></i>
    </form>
)