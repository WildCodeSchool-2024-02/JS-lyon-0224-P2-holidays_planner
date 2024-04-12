import styles from "./button.module.css";

function Button() {
  return (
    <div className={styles.blocSearch}>
      <label className={styles.title}>
        Choose your country
        <input type="text" className={styles.country} minLength="2" />
        <button type="button" className={styles.search}>
          Search
        </button>
      </label>
    </div>
  );
}

export default Button;
