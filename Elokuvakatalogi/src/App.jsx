import { useState } from "react";
import Elokuvalista from "./Elokuvalista";
import Lomake from "./Lomake";
import Haku from "./Haku";
import "./App.css";

const elokuvatData = [
  { title: "Inception", year: "2010", genre: "Sci-Fi" },
  { title: "Parasite", year: "2019", genre: "Drama" },
  { title: "The Matrix", year: "1999", genre: "Action" },
];

function App() {
  const [elokuvat, setElokuvat] = useState(elokuvatData);
  const [haku, setHaku] = useState("");

  const lisaaElokuva = (uusiElokuva) => {
    setElokuvat([...elokuvat, uusiElokuva]);
  };

  const poistaElokuva = (title) => {
    setElokuvat(elokuvat.filter((elokuva) => elokuva.title !== title));
  };

  const suodatetutElokuvat = elokuvat.filter((elokuva) =>
    elokuva.title.toLowerCase().includes(haku.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Elokuvakatalogi</h1>

      <Haku haku={haku} setHaku={setHaku} />

      <Lomake lisaaElokuva={lisaaElokuva} />

      <Elokuvalista
        elokuvat={suodatetutElokuvat}
        poistaElokuva={poistaElokuva}
      />
    </div>
  );
}

export default App;
