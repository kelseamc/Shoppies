import React, {useEffect, useState} from 'react'

function DetailModal({show, movie, closeModal}) {
    const [details, setDetails] = useState()

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=76ce311`)
        .then((r) => r.json())
        .then(data => {
            setDetails(data)
        })
    }, [show])

    console.log(details)
    return (
        <>
        {show ?
            (
            <div className="modal"  >
                <div className="content" >

                    <img src={movie.Poster} alt={movie.Title} />
                    <button onClick={closeModal} >Close</button>

                    <div className="topDetails">
                        <h2>{details.Title}</h2>
                        <h5>Rated:  {details.Rated}</h5>
                        <h5>{details.Year}</h5>
                        <h5>{details.Runtime}</h5>
                        <button id="nom">Nominate</button>
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
