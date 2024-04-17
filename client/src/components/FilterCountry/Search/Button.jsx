import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ setCountryCode }) {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <div className={styles.blocSearch}>
      <label className={styles.title}>
        Choose your country
        {}
        <input
          type="text"
          className={styles.country}
          minLength="2"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button
          type="button"
          className={styles.search}
          onClick={(e) => {
            e.preventDefault();
            setCountryCode(currentSearch);
          }}
        >
          Search
        </button>
      </label>
    </div>
  );
}

Button.propTypes = {
  setCountryCode: PropTypes.func.isRequired,
};

export default Button;
