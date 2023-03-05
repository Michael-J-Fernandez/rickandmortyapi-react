

export default function Cards({ results }) {

    // const [ characters, setCharacters ] = setState(results)
    
    // if (characters.length > 0) {

        const cards = results.map(char => {
            return (
                <div className="character--card">
                    <img src={char.image} alt={`${char.name}`} />
                    <div className="card--stats">
                        <h3>{char.name}</h3>
                        <p><b>Species:</b> {char.species}</p>
                        <p><b>Gender:</b> {char.gender}</p>
                        <p><b>Status:</b> {char.status}</p>
                    </div>
                </div>
        )
        })
    // }

    return (
        <section className="cards">
            {cards}
        </section>
    )
}