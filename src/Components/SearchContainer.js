import React, { useState, useEffect} from 'react'
import MovieContainer from './MovieContainer'
import '../Styles/Search.css'

function SearchContainer({addNom, noms, removeNom}) {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let isMounted = true;

        fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
        .then((r) => r.json())
        .then((data) => {
            if (isMounted) handleMovies(data.Search) 
        })

        return () => { isMounted = false };
        
    }, [search])

    const handleMovies = (data) => {
        setMovies(data)
    }

    return (
        <div className="results">
            <div className="searchContainer">
                <input  className="searchBar" 
                        type="text" 
                        placeholder=" 🔍 Search for movie..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {movies ? <MovieContainer addNom={addNom} 
                                      movies={movies} 
                                      noms={noms} 
                                      removeNom={removeNom}
                      /> 
            : null}

        </div>
    )
}

export default SearchContainer
