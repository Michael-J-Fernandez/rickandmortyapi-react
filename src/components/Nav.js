
export default function Nav({ setURL, prev, next }) {

  const getPrev = () => {
    setURL(prev)
  }
  
  const getNext = () => {
    setURL(next)
  }
  
  return (

    <nav>
      <div className="nav--button" onClick={getPrev}>{"<<"} Prev</div>
      <h1 className="main-title">Rick and Morty Characters!</h1>
      <div className="nav--button" onClick={getNext}>Next {">>"}</div>
    </nav>
  );
}
