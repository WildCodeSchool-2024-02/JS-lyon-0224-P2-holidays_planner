import { useState, useEffect } from "react";
import styles from "./filtecountry.module.css";
import Header from "../Common/Navbar/Header";
import Result from "./Result/Result";
import Button from "./Search/Button";
import Footer from "../Common/Footer/Footer";

function FilterCountry() {
  const [data, setData] = useState(["FR"]);
  // Stocker le code du pays ISO (type FR) du pays
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    // Récupération du code pays actuel
    fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [countryCode]);

  return (
    <div className={styles.divApp}>
      <section className={styles.headerPart}>
        <Header />
      </section>
      <section className={styles.buttonPart}>
        <Button setCountryCode={setCountryCode} />
      </section>
      <section className={styles.resultPart}>
        <Result holidays={data} />
      </section>
      <section className={styles.footerPart}>
        <Footer />
      </section>
    </div>
  );
}

export default FilterCountry;
