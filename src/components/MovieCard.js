const MovieCard = (props) => {
    return (
        <div className='movieCard'>
            <h1>{props.title}</h1>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rating}</p>
            <ul>{props.genres}</ul>
        </div>
    );
}

export default MovieCard;