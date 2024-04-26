import styles from "./aboutUs.module.css";
import Adeline from "../../assets/images/Adeline.jpg";
import Bastien from "../../assets/images/Bastien.jpg";
import Kana from "../../assets/images/Kana.jpg";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1>About team</h1>
      <img alt="Portrait of Adeline" src={Adeline} />
      <h2>Adeline</h2>
      <h4>Developer Web Junior</h4>

      <img alt="Portrait of Bastien" src={Bastien} />
      <h2>Bastien</h2>
      <h4>Developer Web Junior</h4>

      <img alt="Portrait of Kana" src={Kana} />
      <h2>Kana</h2>
      <h4>Developer Web Junior</h4>
    </div>
  );
}

export default AboutUs;
