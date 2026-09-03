function Haku({ haku, setHaku }) {
  return (
    <section>
      <h2>Haku</h2>

      <input
        type="text"
        placeholder="Hae elokuvan nimellä..."
        value={haku}
        onChange={(event) => setHaku(event.target.value)}
      />
    </section>
  );
}

export default Haku;
