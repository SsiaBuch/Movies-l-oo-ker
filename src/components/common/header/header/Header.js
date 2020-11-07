import React from 'react';
import './Header.css'
import { Logo } from '../../../generic/logo/Logo.js';
import { NavItems } from '../../../generic/navigation/NavItems.js'
import { Navigation } from '../../../generic/navigation/Navigation.js';
import Search from '../../../generic/search/Search.js';
import { getMapRender } from '../../../lib/GetMapRender.js'
import { ButtonRandomFilm } from '../../../generic/button/ButtonRandomFilm.js'
import { Route } from 'react-router-dom';
import { NavDate } from '../../../generic/navigation/NavDate.js'

export class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {
        flagMenu: false,
        ind: '',
    }

    myHendleMenuClick = (ind) => {
        console.log(ind);
        this.setState({ ind: ind, flagMenu: !this.state.flagMenu })
    }
    render() {
        // console.log(this.state.ind);
        // console.log(NavDate.header[this.state.ind]);
        return (
            <header className='header'>
                <div className='container'>
                    <Route path='/' exact> <ButtonRandomFilm /></Route>

                    <div className='header__content'>
                        <Logo logoSize="header__logo" />
                        <div className='header__unite'>
                            <Navigation
                                getRender={getMapRender(NavDate.header, NavItems.header, this.myHendleMenuClick, this.state.flagMenu)}
                            />

                            <Search
                                searchStyle="header__search"
                                searchPlaceholder="Что ищем?"
                            />

                        </div>

                        {/* ---------в разработке---------- */}
                        <div className='profile'></div>
                        {/* ---------в разработке---------- */}
                    </div>
                </div>
            </header>
        );
    }
}

// export default ;
// export const Header = (props) => {
//     console.log(NavDate.header);
//     return (
//         <header className='header'>
//             <div className='container'>
//                 <Route path='/' exact><RandomFilms /></Route>

//                 <div className='header__content'>
//                     <Logo logoSize="header__logo" />
//                     <div className='header__unite'>
//                         <Navigation
//                             getRender={getMapRender(NavDate.header, NavItems.header)}
//                         />

//                         <Search
//                             searchStyle="header__search"
//                             searchPlaceholder="Что ищем?"
//                         />

//                     </div>

//                     {/* ---------в разработке---------- */}
//                     <div className='profile'></div>
//                     {/* ---------в разработке---------- */}
//                 </div>
//             </div>
//         </header>
//     )
// }





