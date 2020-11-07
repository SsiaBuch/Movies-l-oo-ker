import React from 'react';
import { BsGrid3X3Gap, BsListUl } from "react-icons/bs";
import './ButtonMoviesDetailsChange.css'

export const ButtonMoviesDetailsChange = (props) =>
    <>
        { props.flag ?
            <div className='movie__toggle-button' onClick={props.onClick}><BsListUl /></div>
            : <div className='movie__toggle-button' onClick={props.onClick}>< BsGrid3X3Gap /></div>
        }
    </>
