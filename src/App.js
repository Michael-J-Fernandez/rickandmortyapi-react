import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import './App.css';
const URL = "https://rickandmortyapi.com/api/character";

function App() {

  const [ charData, setCharData ] = useState({})
  
  useEffect(()=>{
    console.log("effect ran!")
    fetch(URL)
      .then(res => res.json())
      .then(data => setCharData(data))
  }, [])


  return (
    <>
      {/* {charData.results && <Cards results={charData.results} />} */}
      {charData.results ? <Cards results={charData.results} /> : <h1 className="loading">Loading...</h1>}
    </>
  );
}

export default App;
