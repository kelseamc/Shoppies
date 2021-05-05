import React from 'react'
import MovieCard from './MovieCard'

function MovieContainer({movies, addNom, noms, removeNom}) {
    
    return (
        <div className="movieContainer">
            {movies.map((mov) => <MovieCard key={mov.imdbID} 
                                            movie={mov} 
                                            addNom={addNom} 
                                            theme={"movieCard"} 
                                            noms={noms}
                                            removeNom={removeNom}
                                /> )
            }
        </div>
    )
}

export default MovieContainer
