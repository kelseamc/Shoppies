import React, {useState} from 'react'
import DetailModal from './DetailModal'


function MovieCard({movie, addNom, theme, noms, removeNom}) {
    const [show, setShow] = useState(false)

    function handleDetails(){
        setShow(true)
    }
    function closeModal(){
        setShow(false)
    }
    function handleNom(){
        addNom(movie)
    }
    function handleRemove(){
        removeNom(movie)
    }

    return (
        <>
            <div className={theme}>
                <img src={movie.Poster} alt={`${movie.Title}`} />
                {localStorage.getItem("submited") === "true" ? null :
                   ( <div className="over-movie-card">
                        {noms.find(element => element === movie) ?
                            <button onClick={handleRemove}>Remove</button>
                            :
                            <button onClick={handleNom}>Nominate</button>
                        }
                        <br />
                        <button id="details" onClick={handleDetails}>Details</button>
                    </div>)
                }
            </div>

            <DetailModal show={show} 
                         movie={movie} 
                         closeModal={closeModal} 
                         noms={noms} 
                         handleNom={handleNom} 
                         handleRemove={handleRemove}
            /> 

        </>
    )
}

export default MovieCard
