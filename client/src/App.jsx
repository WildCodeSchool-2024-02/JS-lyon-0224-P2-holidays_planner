import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Button from "./components/Search/Button";
import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState(["FR"]);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
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

export default App;
