import { useState, useEffect } from "react";
import styles from "./filtecountry.module.css";
import Header from "../Common/Navbar/Header";
import Result from "./Result/Result";
import Button from "./Search/Button";
import Footer from "../Common/Footer/Footer";

function FilterCountry() {
  const [data, setData] = useState(["FR"]);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [countryCode]);

  return (
    <div className={styles.divApp}>
      <Header />
      <Button setCountryCode={setCountryCode} />
      <Result holidays={data} />
      <Footer />
    </div>
  );
}

export default FilterCountry;
