import React from 'react';
import { Header } from './header/Header.js';
import  {Banner}  from './banner/Banner.js';
import { Poster } from './poster/Poster.js';


import { Route } from 'react-router-dom';

export const HeaderContainer = () => {
    return (
        <>
            <div className='headerContainer'>
                <Header/>

                <Route path='/' exact>
                    <Banner />
                </Route>

                <Route path='/people' exact>
                    <Poster />
                </Route>

            </div>
        </>
    )
}
