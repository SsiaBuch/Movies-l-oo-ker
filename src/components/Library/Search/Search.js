import React from 'react';

export const Search = (props) => (
    <form className={props.searchStyle}>
        <input
            type='text'
            style={{ width: '80%', height: '30px', fontFamily: 'Montserrat', fontWeight: 900}}
            placeholder={props.searchPlaceholder}
        />
        <i className="fas fa-search" ></i>
    </form>
)