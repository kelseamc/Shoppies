import React from 'react'
import MovieCard from './MovieCard'

function MovieContainer({movies}) {
    return (
        <div className="movieContainer">
            {movies.map((mov) => <MovieCard key={mov.imdbID} movie={mov} /> )}
        </div>
    )
}

export default MovieContainer
