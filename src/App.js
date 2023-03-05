import { useEffect, useState } from 'react';
import './App.css';

const URL = "https://rickandmortyapi.com/api/character/?page=1";

function App() {

  const [ charData, setCharData ] = useState({})
  
  useEffect(()=>{
    console.log("effect ran!")
    fetch(URL)
    .then(res => res.json())
    .then(data => setCharData(data))
  }, [])
  
  
  console.log(typeof charData.results)
  console.log("This is my Char Data: ", charData.results)
  
  
  // const charList = charData.results.map(char => <h3>{char["name"]}</h3>)

  return (
    <div>
      {/* {charList} */}
      {charData.results.map((char) => (
        <h3>{char.name}</h3>
      ))}
    </div>
  );
}

export default App;
