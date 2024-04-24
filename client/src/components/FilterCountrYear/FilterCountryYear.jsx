import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SearchYear from "./SearchYear";
import Resultyear from "./ResultYear";

function FilterCountryYear() {
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    setDate(newDate);
  };

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
      <Calendar
        onChange={onChange}
        value={date}
        locale="en-UK"
        // eslint-disable-next-line no-shadow
        tileContent={({ date, view }) => {
          const formattedDate = date.toISOString().split("T")[0];
          const holiday = dataYear.find(
            (lazyDay) => lazyDay.date === formattedDate
          ); 

          return view === "month" && holiday ? holiday.name : null; 
        }}
      />
      <Resultyear dataYear={dataYear} />
    </div>
  );
}

export default FilterCountryYear;