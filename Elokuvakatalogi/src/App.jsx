import { useContext, useState } from "react";
import Elokuvalista from "./Elokuvalista";
import Lomake from "./Lomake";
import Haku from "./Haku";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

const elokuvatData = [
  { title: "Inception", year: "2010", genre: "Sci-Fi" },
  { title: "Parasite", year: "2019", genre: "Drama" },
  { title: "The Matrix", year: "1999", genre: "Action" },
];

function App() {
  const [elokuvat, setElokuvat] = useState(elokuvatData);
  const [haku, setHaku] = useState("");

  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <div className={`app ${theme}`}>
      <Header />

      <h1>Elokuvakatalogi</h1>

      <button onClick={toggleTheme}>Vaihda teema</button>

      <Lomake lisaaElokuva={lisaaElokuva} />

      <Haku haku={haku} setHaku={setHaku} />

      <Elokuvalista
        elokuvat={suodatetutElokuvat}
        poistaElokuva={poistaElokuva}
      />
    </div>
  );
}

export default App;
