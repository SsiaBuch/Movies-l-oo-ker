import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClickOnTop } from '../../lib/ClickOnTop.js';
import './NavItems.css'

export const NavItems = {
    header: (el /*, onClick, flag, i*/) =>
        <>
            <li className='dropdown' >
                <button >
                    {el.items}
                    {/* <BsChevronDoubleDown className='dropdown__icon' /> */}
                </button>

                <ul className='dropdown-content'
                // style={!flag ? {display: 'block'} : {display: 'none'}}
                >
                    <div className='cor__dropdown'>
                        {/* <BsChevronDoubleDown className='dropdown__icon' /> */}
                    </div>
                    {el.downItems.map((el, i) =>
                        <li key={i}
                        // onClick={onClick.bind(this, i)}
                        >
                            <NavLink to={`${el.link}`} >
                                <span className='dropdown-content__icon' style={el.color}>{el.ico}</span>
                                <span className='dropdown-content__name'>{el.name}</span>
                            </NavLink>
                        </li>)
                    }
                </ul>

            </li>
        </>,

    sectionNav: (el, onClick, defaultItem, style) =>
        <li>
            <button
                style={{ padding: '10px 15px' }}
                className={defaultItem === el ? style : null}
                value={el}
                onClick={onClick}
            >{el}</button>
        </li>,
    footerNav: (el, link) =>
        <li>
            <NavLink onClick={ClickOnTop} to='/link'>
                <button className='footer__btn'
                >{el}</button>
            </NavLink>

        </li>
}