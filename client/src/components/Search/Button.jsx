function Button() {
  return (
    <div>
      <label>
        Choose your country
        <input type="text" minLength="2" />
        <button type="button">
          Search
        </button>
      </label>
    </div>
  );
}

export default Button;
