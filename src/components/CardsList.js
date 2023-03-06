import Card from './Card'

export default function CardsList({ results }) {

    return (
      <section className="cards">
        {results.map((char) => (
          <Card char={char} key={char.id} />
        ))}
      </section>
    );
}