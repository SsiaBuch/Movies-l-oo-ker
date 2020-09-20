import React from 'react';
import { Section } from './Section.js'
import './main.css'

export const Main = (props) =>
    <div className='main'>
        <Section popularMovies={props.popularMovies}/>
    </div>