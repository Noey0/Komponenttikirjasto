import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  const { username, setUsername } = useContext(UserContext);

  const vaihdaKayttajanimi = () => {
    const uusiNimi = prompt("Anna uusi käyttäjänimi:");

    if (uusiNimi && uusiNimi.trim() !== "") {
      setUsername(uusiNimi.trim());
    }
  };

  return (
    <header className="header">
      <h2>Tervetuloa, {username}!</h2>

      <button onClick={vaihdaKayttajanimi}>Vaihda käyttäjänimi</button>
    </header>
  );
}

export default Header;
