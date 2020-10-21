import React from 'react';
import { Header } from './header/Header.js';
import { Banner } from './banner/Banner.js';
import { Poster } from './poster/Poster.js';
// import { Poster } from './poster/poster.png'


import { Route } from 'react-router-dom';

export const HeaderContainer = () => {
    const headerColor = {
        light: { backgroundColor: 'rgb(255, 255, 255)' }, // 'rgb(248, 249, 250)'
        dark: { backgroundColor: '#ffd400' }
    }
    // const style = [
    //     {
    //         poster: {
    //             backgroundImage: Poster,
    //             height: 320,
    //             width: '100%',
    //             backgroundPosition: 'center',
    //         }
    //     }
    // ]
    return (
        <>
            <div className='headerContainer'>
                <Route path='/'>
                    <Header headerColor={headerColor.light} />
                </Route>

                <Route path='/' exact>
                    <Banner />
                </Route>

                <Route path='/peoples'>
                    <Poster />
                    {/* <div
                        // style={style[0].poster}
                        className='poster_background'></div > */}
                </Route>

            </div>
        </>
    )
}
