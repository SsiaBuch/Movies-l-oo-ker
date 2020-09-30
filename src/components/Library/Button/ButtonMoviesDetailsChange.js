import React from 'react';
import { BsGrid3X3Gap, BsListUl } from "react-icons/bs";

export const ButtonMoviesDetailsChange = (props) =>
    <>
        { props.flag ?
            <div className={props.style} onClick={props.onClick}><BsListUl /></div>
            : <div className={props.style} onClick={props.onClick}>< BsGrid3X3Gap /></div>
        }
    </>
