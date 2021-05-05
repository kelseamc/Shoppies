import React, {useEffect, useState} from 'react'
import '../Styles/Modal.css'

function DetailModal({show, movie, closeModal, noms, handleNom, handleRemove}) {
    const [details, setDetails] = useState()

    useEffect(() => {
        let isMounted = true;
        fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=76ce311`)
        .then((r) => r.json())
        .then(data => {
            if (isMounted) setDetails(data)
        })
        return () => { isMounted = false };
    }, [show, movie.imdbID])

    return (
        <>
        {show ?
            (
            <div className="modal"  >
                <div className="content" >

                    <img src={movie.Poster} alt={movie.Title} />
                    <button onClick={closeModal} >Close</button>

                    <div className="topDetails">
                        <h2>{details.Title} </h2>
                        <h5>Rated:  {details.Rated} </h5>
                        <h5>{details.Year} </h5>
                        <h5>{details.Runtime} </h5>
                        {noms.find(element => element === movie) ?
                        <button id="nom" onClick={handleRemove}>Remove</button>
                        :
                        <button id="nom" onClick={handleNom}>Nominate</button>
                        }
                    </div>

                    <div className="movie-details-text">
                        <p>{details.Plot}</p>
                        <br />
                        <p> Starring: {details.Actors}</p>
                        <br />
                        <span>Genre: {details.Genre}</span>
                    </div>

                </div>
            </div>

            ) :
            null
        }
        </>
    )
}

export default DetailModal
