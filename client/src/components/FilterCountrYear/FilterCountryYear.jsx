import { useState, useEffect } from "react";
import SearchYear from "./SearchYear";
import Resultyear from "./ResultYear";

function FilterCountryYear() {
  const [dataYear, setDataYear] = useState([]);
  const [year, setYear] = useState("");
  const [countryCodeYear, setCountryCodeYear] = useState("");

  useEffect(() => {
    fetch(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCodeYear}`
    )
      .then((res) => res.json())
      .then((json) => setDataYear(json));
  }, [year, countryCodeYear]);

  return (
    <div>
      <SearchYear setYear={setYear} setCountryCodeYear={setCountryCodeYear} />
      <Resultyear ataYear={dataYear} />
    </div>
  );
}

export default FilterCountryYear;
