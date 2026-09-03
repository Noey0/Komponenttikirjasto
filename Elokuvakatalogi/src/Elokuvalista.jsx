function Elokuvalista({ elokuvat, poistaElokuva }) {
  return (
    <section>
      <h2>Elokuvat</h2>

      {elokuvat.map((elokuva, index) => (
        <div className="movie" key={index}>
          <div>
            <strong>{elokuva.title}</strong>
            {" - "}
            {elokuva.year}
            {" - "}
            {elokuva.genre}
          </div>

          <button onClick={() => poistaElokuva(elokuva.title)}>Poista</button>
        </div>
      ))}
    </section>
  );
}

export default Elokuvalista;
