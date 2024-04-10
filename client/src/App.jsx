import "./App.css";
import { useState, useEffect } from "react";
import USFCResult from "./components/US_FC_Result";
import USFCbutton from "./components/US_FC_button";
import Header from "./components/header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://date.nager.at/api/v3/NextPublicHolidays/FR")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, []);

  return (
    <div>
      <main>
        <Header />
        <USFCbutton />
        <USFCResult />
        <div>
          {data.map((holiday) => (
            <div key={holiday.date}>
              {holiday.date} - {holiday.name} - {holiday.localName}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
