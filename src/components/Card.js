
const Card = ({ char }) => {
    return (
      <div className="character--card" key={char.id}>
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
      </div>
    );
}
 
export default Card;