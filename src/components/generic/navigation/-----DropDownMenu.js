import React from 'react';
import './DropDownMenu.css'
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

export class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: ['По популярности', 'По дате', 'По годам', 'По алфавиту'],
            flagMovieSort: false,
        };

        this.sortRef = React.createRef()
        this.sortButton = React.createRef()
    }

    movieSortHandler = () => {
        this.setState({
            flagMovieSort: !this.state.flagMovieSort
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside = e => {
        console.log(e.composedPath())
        if (this.state.flagMovieSort && !e.composedPath().includes(this.sortRef?.current) && !e.composedPath().includes(this.sortButton?.current)) {
            this.setState({
                flagMovieSort: false
            })
        }
    }

    render() {
        const { flagMovieSort, sort } = this.state
        return (
            <div className='movie-sort'>
                {/* {console.log(flagMovieSort)} */}
                <div className='movie-sort__name'>Сортировка</div>
                <div className='movie-sort_flex'>
                    <div className='movie-sort__choice' onClick={this.movieSortHandler} ref={this.sortButton}>По популярности</div>

                    {flagMovieSort ? <div className='choice' ref={this.sortRef}>
                        {sort.map((el, i) =>
                            <div key={i} className='choice__variant'>{el}</div>
                        )}
                    </div> : null}

                </div>
                <BsChevronDoubleDown className='movie-sort__icon' />
                <BsChevronDoubleUp className='movie-sort__icon' />
            </div>
        );
    }
}