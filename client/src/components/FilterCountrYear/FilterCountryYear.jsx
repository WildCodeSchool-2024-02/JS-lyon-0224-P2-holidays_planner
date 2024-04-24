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
        onClickyear={(value, event) => alert("Clicked year: ", value)}
        tileContent={({ date, view }) => {
          const formattedDate = date.toISOString().split("T")[0]; //カレンダーから取り出す日付は、T以下の時刻などは必要とせず、年月日だけを取り出したい
          const holiday = dataYear.find(
            (holiday) => holiday.date === formattedDate
          ); // APIデータの中はリストであり、リストの中のオブジェクトをholidayと呼ぶ。anotherdata（＝検索結果）とholidayの中のDateは先程指定したフォーマットと一緒になるはず。という前提をここで指定する

          return view === "month" && holiday ? holiday.name : null; // 先程指定したフォーマットに一致している場合、結果は名前を表示する
        }}
      />
      <Resultyear dataYear={dataYear} />
    </div>
  );
}

export default FilterCountryYear;
