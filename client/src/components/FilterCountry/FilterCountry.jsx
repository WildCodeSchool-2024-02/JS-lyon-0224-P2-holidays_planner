import { useState, useEffect } from "react";
import ResultCountry from "./ResultCountry";
import SearchCountry from "./SearchCountry";

function FilterCountry() {
  const [data, setData] = useState(["FR"]);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [countryCode]);

  return (
    <>
      <SearchCountry setCountryCode={setCountryCode} />
      <ResultCountry holidays={data} />
    </>
  );
}

export default FilterCountry;
