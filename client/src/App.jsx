import "./App.css";
import US_FC_Result from './components/US_FC_Result.jsx';
import { useState } from "react";
import { useEffect } from "react";
// import US_FC_button from './components/US_FC_button.jsx';
// import Header from './components/header.jsx';


function App() {

  const [data, setData] = useState([]); // avecsetData, on change data chque fois 

  useEffect(() => { //Dire react "finir qu'un seul fois pour nous donner les data de API avec useEffect"
    fetch("https://date.nager.at/api/v3/NextPublicHolidays/FR")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, [])

  console.log(data);

  return (
    <div>
      <main>
        {/* <Header />
        <US_FC_button /> */}
        <US_FC_Result />
        <div>
          {data.map((holiday, index) => (
            <div key={index}>
              {holiday.date} - {holiday.name} - {holiday.localName}
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

export default App;
