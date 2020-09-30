import React from 'react';
import './movieSort.css'
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

export class MovieSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: ['По популярности', 'По дате', 'По годам', 'По алфавиту'],
            flagMovieSort: false,
            // movieSortChoice: 'pop',
            // active: false,
        };
    }
    movieSortHandler = () => {
        this.setState({
            flagMovieSort: !this.state.flagMovieSort
        })
    }
    // togleSortChoice = (event) => {
    //     const currentState = this.state.active;
    //     event.preventDefault();
    //     this.setState({
    //         movieSortChoice: event.target.value,
    //         active: !currentState
    //     })
    // }
    // switchContent = (value) => {
    //     switch (value) {
    //         case this.sort[0]:
    //             return <div>
    //                 <p>{this.sort[0]} Content Here</p>
    //             </div>;
    //         case 'paypal':
    //             return <div>
    //                 <p>PayPal Content Here</p>
    //             </div>;
    //         case 'amazon':
    //             return <div>
    //                 <p>Amazon Content Here</p>
    //             </div>;
    //         case 'more':
    //             return <div>
    //                 <p>More Content Here</p>
    //             </div>;
    //         default:
    //             return null;
    //     }
    // }




    render() {
        const { flagMovieSort, sort, movieSortChoice, active } = this.state
        return (
            <div className='movie-sort'>
                {/* {console.log(flagMovieSort)} */}
                <div className='movie-sort__name'>Сортировка</div>
                <div className='movie-sort_flex'>
                    <div className='movie-sort__choice' onClick={this.movieSortHandler}>По популярности</div>
                    <div className='choice' >
                    {/* {flagMovieSort ?
                        sort.map((el, i) =>
                        <button key={i} outline className={ `choice__variant ${el ? 'active' : null}`} color="secondary" value={el} onClick={this.togleSortChoice} >pop</button>
                        ) : null
                    } */}
                        {
                            flagMovieSort ?
                                sort.map((el, i) =>
                                    <div key={i} className='choice__variant'>{el}</div>
                                ) : null
                        }
                    </div>
                    {/* {
                        sort.map((el, i) =>
                        <button key={i} outline className={ el ? 'active' : null} color="secondary" value={el} onClick={this.togleSortChoice} >pop</button>
                        )
                    } */}
                    
                </div>
                <BsChevronDoubleDown className='movie-sort__icon' />
                <BsChevronDoubleUp className='movie-sort__icon' />
            </div>
        );
    }
}