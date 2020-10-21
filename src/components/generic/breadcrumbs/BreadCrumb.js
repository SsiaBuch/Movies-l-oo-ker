import React from 'react';
import './BreadCrumb.css';
// import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export const BreadCrumb = (props) => {
    // console.log(props);
    let arr = [props.name]
    return (
        <div className='breadcrumbs'>
            <NavLink to='/' exact ><span>Главная</span></NavLink>
            {arr.map((el, i) =>
                <React.Fragment key={i}>
                    <span className='breadcrumb_separetor'>/</span>
                    <span className='breadcrumb_active'>{el}</span>
                </React.Fragment>)}
        </div>
    )
}
