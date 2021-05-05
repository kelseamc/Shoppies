import React, { useState } from 'react'
import MovieCard from './MovieCard'
import '../Styles/NomContainer.css'
import Confetti from 'react-confetti'

function NomineeContainer({noms, removeNom}) {
    const [celebrate, setCelebrate] = useState(false)

    const handleSubmit = () => {
        localStorage.setItem("nominees", JSON.stringify(noms))
        localStorage.setItem("submited", "true")
        setCelebrate(true)
    }

    return (
        <>
        <Confetti width={window.innerWidth} height={window.innerHeight} run={celebrate}/>
        <div className="nomContainer">
            {noms[0] ? <MovieCard movie={noms[0]} theme={"nomMov"} noms={noms} removeNom={removeNom} /> 
                :  (<div className="nomCard">
                        <h1>1</h1>
                    </div>) 
            }
            {noms[1] ? <MovieCard movie={noms[1]} theme={"nomMov"} noms={noms} removeNom={removeNom}/> 
                :  (<div className="nomCard">
                        <h1>2</h1>
                    </div>) 
            }
            {noms[2] ? <MovieCard movie={noms[2]} theme={"nomMov"} noms={noms} removeNom={removeNom}/> 
                :  (<div className="nomCard">
                        <h1>3</h1>
                    </div>) 
            }
            {noms[3] ? <MovieCard movie={noms[3]} theme={"nomMov"} noms={noms} removeNom={removeNom}/> 
                :  (<div className="nomCard">
                        <h1>4</h1>
                    </div>) 
            }
            {noms[4] ? <MovieCard movie={noms[4]} theme={"nomMov"} noms={noms} removeNom={removeNom}/> 
                :  (<div className="nomCard">
                        <h1>5</h1>
                    </div>) 
            }

        </div>
        {localStorage.getItem("submited") === "true" ? <p className="submitResponse">Thank You For Voting!</p> :
            (<div className="nomSubmit">
                {noms.length === 5 ? <button onClick={handleSubmit} > Submit</button> : null }

            </div>)
        }
        </>
    )
}

export default NomineeContainer
