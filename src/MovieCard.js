import React, {useState} from 'react'
import DetailModal from './DetailModal'

function MovieCard({movie}) {
    const [show, setShow] = useState(false)
    function handleDetails(){
        setShow(true)
    }
    function closeModal(){
        setShow(false)
    }
    return (
        <>
        <div className="movieCard">
            <img src={movie.Poster} alt={`${movie.Title}`} />
            <div className="over-movie-card">
                <button>Nominate</button>
                <br />
                <button id="details" onClick={handleDetails}>Details</button>
            </div>
        </div>
        <DetailModal show={show} movie={movie} closeModal={closeModal}/> 

        </>
    )
}

export default MovieCard
