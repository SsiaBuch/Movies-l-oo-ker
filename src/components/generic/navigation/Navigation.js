import React from 'react';

export const Navigation = (props) => {
    return (
        <nav>
            <ul style={{ display: "flex"}}>
                {
                    props.getRender
                }
            </ul>
        </nav>
    )
}