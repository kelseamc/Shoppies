import React, {useState} from 'react'
import DetailModal from './DetailModal'
import '../Styles/MovieCard.css'
import '../Styles/NomCard.css'

function MovieCard({movie, addNom, theme, noms, removeNom}) {
    const [show, setShow] = useState(false)


    const handleDetails = () => {setShow(true)}

    const closeModal = () => {setShow(false)}
        
    const handleNom = () => {addNom(movie) }
        
    const handleRemove = () => {removeNom(movie)}
        
    

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
