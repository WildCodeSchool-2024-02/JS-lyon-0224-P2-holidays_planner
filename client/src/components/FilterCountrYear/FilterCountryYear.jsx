import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styles from "./filtercountryyear.module.css";
import "react-calendar/dist/Calendar.css";
import SearchYear from "./SearchYear";
import Resultyear from "./ResultYear";

function FilterCountryYear() {
  const [dateCY, setDateCY] = useState(new Date());
  const onChange = (newDate) => {
    setDateCY(newDate);
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
    <div className={styles.calendarYearPage}>
      <SearchYear setYear={setYear} setCountryCodeYear={setCountryCodeYear} />
      <Calendar
        onChange={onChange}
        value={dateCY}
        locale="en-UK"
        tileContent={({ date, view }) => {
          const formattedDate = date.toISOString().split("T")[0];
          const holiday = dataYear.find(
            (lazyDay) => lazyDay.date === formattedDate
          );

          return view === "month" && holiday ? holiday.name : null;
        }}
      />

      <Resultyear days={dataYear} />
    </div>
  );
}

export default FilterCountryYear;
