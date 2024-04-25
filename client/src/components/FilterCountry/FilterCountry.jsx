import { useState, useEffect } from "react";
import SearchCountry from "./SearchCountry";
import ResultCountry from "./ResultCountry";

function FilterCountry() {
  const [data, setData] = useState([]);
  const [countryCode, setCountryCode] = useState("FR");

  useEffect(() => {
    if (countryCode) {
      fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    }
  }, [countryCode]);

  return (
    <div>
      <SearchCountry setCountryCode={setCountryCode} />
      <ResultCountry holidays={data} />
    </div>
  );
}

export default FilterCountry;
