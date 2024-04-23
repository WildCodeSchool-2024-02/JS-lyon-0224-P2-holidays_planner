import { useState } from "react";
import Proptypes from "prop-types";
import styles from "./searchYear.module.css";

function SearchYear({ setCountryCodeYear, setYear }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className={styles.blocSearch}>
        <label className={styles.title}>
          Choose your country
          <input
            type="text"
            className={styles.country}
            minLength="2"
            maxLength="2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className={styles.search}
            onClick={(e) => {
              e.preventDefault();
              setCountryCodeYear(search);
            }}
          >
            Search
          </button>
        </label>
      </div>
      <div className={styles.blocSearch}>
        <label className={styles.title}>
          Choose your year
          <input
            type="text"
            className={styles.country}
            minLength="2"
            maxLength="2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className={styles.search}
            onClick={(e) => {
              e.preventDefault();
              setYear(search);
            }}
          >
            Search
          </button>
        </label>
      </div>
    </div>
  );
}

SearchYear.propTypes = {
  setCountryCodeYear: Proptypes.func.isRequired,
  setYear: Proptypes.func.isRequired,
};

export default SearchYear;
