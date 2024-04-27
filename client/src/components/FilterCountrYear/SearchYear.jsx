import { useState } from "react";
import Proptypes from "prop-types";
import styles from "./searchYear.module.css";

function SearchYear({ setCountryCodeYear, setYear, searchWithYear }) {
  const [search, setSearch] = useState("");
  const [searchYear, setSearchYear] = useState("");
  return (
    <div className={styles.blocSearch}>
      <label className={styles.title}>
        Choose your country & year
        <input
          type="text"
          placeholder="Country Code"
          className={styles.country}
          minLength="2"
          maxLength="2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          className={styles.country}
          minLength="4"
          maxLength="4"
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
        />
      </label>
      <button
        type="button"
        className={styles.search}
        onClick={(e) => {
          e.preventDefault();
          setCountryCodeYear(search);
          setYear(searchYear);
          searchWithYear(searchYear);
        }}
      >
        Search
      </button>
    </div>
  );
}
SearchYear.propTypes = {
  setCountryCodeYear: Proptypes.func.isRequired,
  setYear: Proptypes.func.isRequired,
  searchWithYear: Proptypes.func.isRequired,
};
export default SearchYear;
