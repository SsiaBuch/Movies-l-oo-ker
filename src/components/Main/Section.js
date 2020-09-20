import React from 'react';
import './section.css'

export const Section = (props) =>
    <div className='conteiner'>
        <div className='section'>
            <div className=''>Что популярно</div>
            <div className='section__flex'>
                {
                    props.popularMovies.map((el, i) => {
                        return (
                            <React.Fragment key={i}>
                                <img className='section__img' src={`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt="pop" />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>

    </div>