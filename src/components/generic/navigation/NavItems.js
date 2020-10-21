import React from 'react';

export const NavItems = {
    header: el =>
        <li>
            <button
                style={{ padding: '10px 15px' }}
            >
                {el}
            </button>
        </li>,
    sectionNav: (el, onClick, defaultItem, style) =>
        <li>
            <button
                style={{ padding: '10px 15px' }}
                className={defaultItem === el ? style : null}
                value={el}
                onClick={onClick}
            >{el}</button>
        </li>
}