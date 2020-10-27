import React from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export const ButtonGoTo = (props) => {
    // console.log(props);
    const style = {
        color: '#ffd400',
        marginLeft: 10,
    }
    return (
        <NavLink 
            onClick={props.onClick}
            to={`${props.linkTo}`}
        >
            <span style={{ color: '#555', borderBottom: '1px dotted #bebebe' }}>{props.text}</span>
            <BsChevronDoubleRight style={style} />
        </NavLink>
    )
}
