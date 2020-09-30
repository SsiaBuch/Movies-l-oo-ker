import React from 'react';
import './peopleContent.css'

export const PeopleContent = (props) =>
    <>
        {
            props.people.map((el, i) => {
                return (
                    <div className='people people__conteiner' key={i}>
                        <div className='people__profile'>
                            <a title='' href='#'>
                                <img
                                    className='people__profile-img [ people__img ]'
                                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                                    alt={el.name} />
                            </a>
                        </div>
                        <h3 className='people__name'>
                            <a title='' href='#'>{el.name}</a></h3>
                    </div>

                )
            })
        }
    </>