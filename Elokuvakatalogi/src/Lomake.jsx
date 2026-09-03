import { useState } from "react";

function Lomake({ lisaaElokuva }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "" || year === "" || genre === "") {
      return;
    }

    const uusiElokuva = {
      title: title,
      year: year,
      genre: genre,
    };

    lisaaElokuva(uusiElokuva);

    setTitle("");
    setYear("");
    setGenre("");
  };

  return (
    <section>
      <h2>Lisää elokuva</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Elokuvan nimi"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Vuosi"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />

        <button type="submit">Lisää</button>
      </form>
    </section>
  );
}

export default Lomake;
