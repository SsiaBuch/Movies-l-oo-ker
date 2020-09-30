import React from 'react';
import './asideBlockTitle.css'

export const AsideBlockTitle = (props) =>
    <>
        <h3>{props.title}</h3>
        <span>{props.preTitle}</span>
    </>