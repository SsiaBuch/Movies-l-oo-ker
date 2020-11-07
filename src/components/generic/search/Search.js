import React from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { withRouter } from 'react-router-dom';
import { getMapRender } from '../../lib/GetMapRender.js'
import { ButtonGoTo } from '../../generic/button/ButtonGoTo.js'
import './Search.css'

const Search = (props) => {
    // console.log(props.APIsearch);
    return (
        <div>
            {/* {console.log(props)} */}
            <form className={`search ${props.searchStyle}`}>
                <input
                    value={props.myInputValue}
                    onChange={props.myHandleInputChange}
                    type='text'
                    className='search__input'
                    style={{ fontFamily: 'Montserrat' }}
                    placeholder={props.searchPlaceholder}
                />
                <RiSearch2Line />
            </form>
            <div className={`search_results ${props.flagShow ? 'searchOn' : 'searchOff'}`}>
                {props.APIsearch !== undefined ?
                    getMapRender(props.APIsearch, props.render)
                    : ''}
                <div className='search__button'>
                    <ButtonGoTo
                        text='Все результаты'
                        linkTo={`/search/${props.myInputValue}`}
                    />
                </div>
            </div>
        </div>
    )
}
export default withRouter(Search);


