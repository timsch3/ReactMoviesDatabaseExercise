import React from 'react';
import movies from '../data/movies'
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
    state = {
        moviesList: movies,
        genreInput: ''
    }
    sortByRating = () => {
        let tempArr = this.state.moviesList.slice().sort((a, b) => b.rating - a.rating)
        this.setState({ moviesList: tempArr })
    }
    sortByOldest = () => {
        let tempArr = this.state.moviesList.slice().sort((a, b) => a.year - b.year)
        this.setState({ moviesList: tempArr })
    }
    sortByNewest = () => {
        let tempArr = this.state.moviesList.slice().sort((a, b) => b.year - a.year)
        this.setState({ moviesList: tempArr })
    }
    sortAZ = () => {
        let tempArr = this.state.moviesList.slice().sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
        this.setState({ moviesList: tempArr })
    }
    sortZA = () => {
        let tempArr = this.state.moviesList.slice().sort((a, b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
        this.setState({ moviesList: tempArr })
    }
    showGenre = (event) => {
        let userInput = String(event.target.value)
        if (userInput.length === 0) {
            this.setState({ moviesList: movies })
        } else {
            let tempArr = movies.slice().filter(e => e.genres.length === 1 ?
                e.genres[0].toLowerCase() === userInput.toLowerCase() :
                e.genres.find(e => e.toLowerCase() === userInput.toLowerCase()))
            this.setState({ moviesList: tempArr })
        }
        this.setState({ genreInput: userInput })
    }
    clearGenreInput = () => {
        this.setState({ genreInput: '' })
        this.setState({ moviesList: movies })
    }
    render() {
        return (
            <div>
                <div className='moviesListInputs'>
                    <button onClick={this.sortByRating} className='sortButton'>Sort by rating</button>
                    <button onClick={this.sortByOldest} className='sortButton'>Sort by oldest</button>
                    <button onClick={this.sortByNewest} className='sortButton'>Sort by newest</button>
                    <button onClick={this.sortAZ} className='sortButton'>Sort A - Z</button>
                    <button onClick={this.sortZA} className='sortButton'>Sort Z - A</button>
                    Only show genre:<input type="text" value={this.state.genreInput} onChange={(event) => this.showGenre(event)} /><button id='clearGenreButton' onClick={this.clearGenreInput}>X</button>
                </div>
                <div className='moviesListCards'>
                    {this.state.moviesList.map(e => <MovieCard key={e.title}
                        title={e.title}
                        year={e.year}
                        director={e.director}
                        duration={e.duration}
                        rating={e.rating}
                        genres={e.genres.map(e => <li key={e}>{e}</li>)}
                    ></MovieCard>)}
                </div>

            </div>
        );
    }
}

export default MoviesList;