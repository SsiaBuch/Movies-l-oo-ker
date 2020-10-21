import React from 'react';

export const Navigation = (props) => {
    return (
        <nav className={props.navStyle}>
            <ul style={{ display: "flex" }}>
                {
                    props.getMapRender
                }
            </ul>
        </nav>
    )
}