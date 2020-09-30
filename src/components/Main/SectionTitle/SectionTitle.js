import React from 'react';
import './sectionTitle.css'

export const SectionTitle = (props) =>
    <div className='title'>
        <div className={`title__logo ${props.logo}`}></div>
        <h2 className='title__name'>{props.title}</h2>
    </div>
