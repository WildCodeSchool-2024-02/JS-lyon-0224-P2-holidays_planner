import styles from "./button.module.css";

function Button() {
  return (
    <div>
      <label className={styles.title}>
        Choose your country
        <input type="text" minLength="2" />
        <button type="button">Search</button>
      </label>
    </div>
  );
}

export default Button;
