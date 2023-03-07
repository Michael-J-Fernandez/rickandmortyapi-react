import { useEffect, useState } from 'react';
import Nav from "./components/Nav";
import CardsList from './components/CardsList';
let BASE_URL = "https://rickandmortyapi.com/api/character/";

function App() {

  const [ URL, setURL ] = useState(BASE_URL)
  const [ charData, setCharData ] = useState({})
  
  useEffect(()=>{
    if (!URL) {
      return;
    }
    
    fetch(URL)
    .then(res => res.json())
    .then(data => setCharData(data))
    console.log('Effect Used!!')
  }, [URL])


  return (
    <div className="App">
      {charData.info &&
      <Nav
        setURL={setURL}
        info={charData.info}
      />}
      {charData.results && <CardsList results={charData.results} />}
    </div>
  );
}

export default App;
