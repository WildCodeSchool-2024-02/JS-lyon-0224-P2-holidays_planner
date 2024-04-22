import { useState } from "react";
import styles from "./searchcountry.module.css";


function Search({setCountryCode}) {
    const [currentSearch, setCurrentSearch] = useState("");
  
    return (
      <div className={styles.blocSearch}>
        <label className={styles.title}>
          Choose your country
          {
          }
          <input type="text" className={styles.country} minLength="2" value={currentSearch} onChange={e => setCurrentSearch(e.target.value)} />
          <button type="button" className={styles.search} onClick={(e) => {
            e.preventDefault();
            setCountryCode(currentSearch);
          }}>
            Search
          </button>
        </label>
      </div>
    );
  }
  
  export default Search;
  