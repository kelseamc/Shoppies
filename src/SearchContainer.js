import React, { useState, useEffect} from 'react'
import MovieContainer from './MovieContainer'

function SearchContainer() {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=76ce311`)
        .then((r) => r.json())
        .then((data) => {
           setMovies(data.Search)
        })
    }, [search])

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
            {movies ? <MovieContainer movies={movies}/> : null}

        </div>
    )
}

export default SearchContainer
