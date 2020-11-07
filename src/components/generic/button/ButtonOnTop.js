import React from 'react';
import './ButtonOnTop.css'
import { BsChevronDoubleUp } from "react-icons/bs";
import {ClickOnTopSmooth} from '../../lib/ClickOnTop.js';

export const ButtonOnTop = () => {
    return (
        <button onClick={ClickOnTopSmooth} className='btnTop'>
            <BsChevronDoubleUp />
        </button>
    )
}
