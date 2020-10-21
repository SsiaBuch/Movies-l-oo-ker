import React from 'react';

export const getMapRender = (arr, render) => {
    return (
        arr.map((el, i) =>
            <React.Fragment key={i}>
                {render(el)}
            </React.Fragment>)
    )
}
export const getMapRenderFull = (arr, render, onClick, defaultItem, style) => {
    return (
        arr.map((el, i) =>
            <React.Fragment key={i}>
                {render(el, onClick, defaultItem, style)}
            </React.Fragment>)
    )
}