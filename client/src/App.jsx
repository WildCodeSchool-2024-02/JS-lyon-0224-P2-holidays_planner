import "./App.css";
import { useState, useEffect } from "react";
import Result from "./components/Result/Result";
import Button from "./components/Search/Button";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://date.nager.at/api/v3/NextPublicHolidays/FR")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <main>
        <Header />
        <Button />
        <Result />
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
