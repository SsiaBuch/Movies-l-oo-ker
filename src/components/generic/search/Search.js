import React from 'react';
import { RiSearch2Line } from "react-icons/ri";

export const Search = (props) => (
    <form className={props.searchStyle}>
        <input
            type='text'
            style={{ width: '80%', height: '30px', fontFamily: 'Montserrat', fontWeight: 900}}
            placeholder={props.searchPlaceholder}
        />
        <RiSearch2Line />
    </form>
)