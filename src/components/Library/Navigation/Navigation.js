import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = (props) => {
    // console.log(props.sortSelection);
    return (
        <nav className={props.navStyle}>
            <ul style={{ display: "flex" }}>
                {
                    props.navList.map((el, i) =>
                        <li key={i}>
                            <NavLink to={props.href[i]} >
                                <button
                                    style={{ padding: '10px 15px' }}
                                    value={el}
                                    onClick={props.onClick}
                                    className={props.sortSelection === el ? props.styleActive : null}
                                >
                                    {el}
                                </button>
                            </NavLink>
                        </li>)
                }
            </ul>
        </nav>
    )
}