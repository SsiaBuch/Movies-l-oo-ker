import React from 'react';
import './SectionTitle.css'

export const SectionTitle = (props) =>
    <div className='title'>
        <div className={`title__logo ${props.logo}`}></div>
        <h2 className='title__name'>{props.title}</h2>
    </div>
