import { useEffect, useState } from 'react';
import Nav from "./components/Nav";
import CardsList from './components/CardsList';
let BASE_URL = "https://rickandmortyapi.com/api/character/";

function App() {

  const [ URL, setURL ] = useState(BASE_URL)
  const [ charData, setCharData ] = useState({})
  
  useEffect(()=>{
    fetch(URL)
      .then(res => res.json())
      .then(data => setCharData(data))
  }, [URL])


  const getPrev = () => {
    setURL(charData.info.prev)
  }

  const getNext = () => {
    setURL(charData.info.next)
  }


  return (
    <div className="App">
      <Nav getPrev={getPrev} getNext={getNext} />
      {
        charData.results ?
        <CardsList results={charData.results} /> : 
        <h1 className="loading">Loading...</h1>
      }
    </div>
  );
}

export default App;
