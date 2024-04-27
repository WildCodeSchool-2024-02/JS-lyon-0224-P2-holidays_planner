import { useState, useEffect } from "react";
import SearchCountry from "./SearchCountry";
import ResultCountry from "./ResultCountry";
import styles from "./filtercountry.module.css";

function FilterCountry() {
  const [data, setData] = useState([]);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    if (countryCode !== null) {
      fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    }
  }, [countryCode]);

  return (
    <div className={styles.filterCountry}>
      <SearchCountry setCountryCode={setCountryCode} />
      <ResultCountry holidays={data} />
    </div>
  );
}

export default FilterCountry;