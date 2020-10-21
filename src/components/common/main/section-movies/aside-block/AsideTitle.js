import React from 'react';
// import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export const AsideTitle = (props) =>
    <NavLink to='/people' href='#onTop'>
        <h3>{props.title}</h3>
        <span>{props.preTitle}</span>
        {/* <div><BsChevronDoubleRight /></div> */}
    </NavLink>