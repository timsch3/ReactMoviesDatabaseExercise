import React from 'react';
import movies from '../data/movies'
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
    state = {
        moviesList: movies,
        moviesListSorted: movies
    }
    sortByRating = () => {
        let tempArr = this.state.moviesList.slice()
        tempArr.sort((a, b) => b.rating - a.rating)
        this.setState({ moviesList: tempArr })
    }
    sortByOldest = () => {
        let tempArr = this.state.moviesList.slice()
        tempArr.sort((a, b) => a.year - b.year)
        this.setState({ moviesList: tempArr })
    }
    sortByNewest = () => {
        let tempArr = this.state.moviesList.slice()
        tempArr.sort((a, b) => b.year - a.year)
        this.setState({ moviesList: tempArr })
    }
    sortAZ = () => {
        let tempArr = this.state.moviesList.slice()
        tempArr.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
        this.setState({ moviesList: tempArr })
    }
    sortZA = () => {
        let tempArr = this.state.moviesList.slice()
        tempArr.sort((a, b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
        this.setState({ moviesList: tempArr })
    }
    render() {
        return (
            <div>
                <div className='moviesListButtons'>
                    <button onClick={this.sortByRating}>Sort by rating</button>
                    <button onClick={this.sortByOldest}>Sort by oldest</button>
                    <button onClick={this.sortByNewest}>Sort by newest</button>
                    <button onClick={this.sortAZ}>Sort A - Z</button>
                    <button onClick={this.sortZA}>Sort Z - A</button>
                </div>
                <div className='moviesListCards'>
                    {this.state.moviesList.map(e => <MovieCard key={e.title}
                        title={e.title}
                        year={e.year}
                        director={e.director}
                        duration={e.duration}
                        rating={e.rating}
                        genres={e.genres.map(e => <li>{e}</li>)}
                    ></MovieCard>)}
                </div>

            </div>
        );
    }
}

export default MoviesList;