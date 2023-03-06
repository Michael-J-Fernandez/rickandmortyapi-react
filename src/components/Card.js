import { useState } from "react";

const Card = ({ char }) => {
  const [flipCard, setFlipCard] = useState(false);

  const cardFront = (
    <>
      <img src={char.image} alt={`${char.name}`} />
      <h3>{char.name}</h3>
      <div className="card--stats">
        <p>
          <b>Species:</b> {char.species}
        </p>
        <p>
          <b>Gender:</b> {char.gender}
        </p>
        <p>
          <b>Status:</b> {char.status}
        </p>
      </div>
    </>
  );

  // number of episodes the character was in, location and origin

  const cardBack = (
    <>
      <h3 className="card-name-back">{char.name}</h3>
      <div className="card--stats-back">
        <p>
          <b>Episodes:</b> {char.episode.length}
        </p>
        <p>
          <b>Location:</b> {char.location.name}
        </p>
        <p>
          <b>Origin:</b> {char.origin.name}
        </p>
      </div>
    </>
  );

  return (
    <div className="character--card" onClick={() => setFlipCard(!flipCard)}>
      {flipCard ? cardBack : cardFront}
    </div>
  );
}
 
export default Card;