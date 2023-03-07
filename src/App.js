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


  return (
    <div className="App">
      <Nav
        setURL={setURL}
        prev={charData.info.prev}
        next={charData.info.next}
      />
      {charData.results && <CardsList results={charData.results} />}
    </div>
  );
}

export default App;
