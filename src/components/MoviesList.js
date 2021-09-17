import React from 'react';
import movies from '../data/movies'
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
    state = {
        moviesList: movies,
        genreInput: String()
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
    showGenre = (event) => {
        let userInput = String(event.target.value)
        console.log(userInput)
        if (userInput.length == 0) {
            console.log('EMPTY')
            this.setState({ moviesList: movies })
        } else {
            let moviesListCopy = movies.slice()
            let tempArr = moviesListCopy.filter(e => e.genres[0].toLowerCase() === userInput.toLowerCase())
            console.log(tempArr)
            this.setState({ moviesList: tempArr })
        }
        this.setState({ genreInput: userInput })
    }
    render() {
        return (
            <div>
                <div className='moviesListInputs'>
                    <button onClick={this.sortByRating}>Sort by rating</button>
                    <button onClick={this.sortByOldest}>Sort by oldest</button>
                    <button onClick={this.sortByNewest}>Sort by newest</button>
                    <button onClick={this.sortAZ}>Sort A - Z</button>
                    <button onClick={this.sortZA}>Sort Z - A</button>
                    Only show genre:<input type="text" value={this.state.genreInput} onChange={(event) => this.showGenre(event)} />
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