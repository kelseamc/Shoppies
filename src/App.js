import './App.css';
import TopBanner from './TopBanner'
import Nominees from './NomineeContainer'
import SearchContainer from './SearchContainer';
import { useEffect, useState } from 'react';
import About from "./About"

function App() {
  const [nominees, setNominees] = useState([])

  useEffect(() => {
    if (localStorage.getItem("nominees")){
      let storedNoms = JSON.parse(localStorage.getItem("nominees"))
      setNominees(storedNoms)
    }
    
  }, [])

  const addNom = (movObj) => {
    if (nominees.length < 5) {
      setNominees([...nominees, movObj])
      localStorage.setItem("nominees", JSON.stringify([...nominees, movObj]))
    }
  }

  const delNom = (movObj) => {
    let newNoms = nominees.filter((nom) =>  nom.imdbID !== movObj.imdbID)
    setNominees(newNoms)
    localStorage.setItem("nominees", JSON.stringify(newNoms))
  }


  return (
    <div >
       <TopBanner />
       {nominees.length > 0 ? <Nominees noms={nominees} removeNom={delNom}/> : <About />}
       <SearchContainer addNom={addNom} noms={nominees} removeNom={delNom}/>
    </div>
  );
}

export default App;
