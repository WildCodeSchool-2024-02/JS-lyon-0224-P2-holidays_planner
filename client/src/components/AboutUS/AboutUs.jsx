import styles from "./aboutUs.module.css";
import Adeline from "../../assets/images/Adeline.jpg";
import Bastien from "../../assets/images/Bastien.jpg";
import Kana from "../../assets/images/Kana.jpg";

function AboutUs() {
  return (
    <div>
      <h1>About our team</h1>
      <div className={styles.aboutUs}>
        <span className={styles.Adeline}>
          <img
            alt="Portrait of Adeline"
            src={Adeline}
            className={styles.photo}
          />
          <h3>Adeline</h3>
          <h4>Developer Web Junior</h4>
        </span>

        <span className={styles.Bastien}>
          <img
            alt="Portrait of Bastien"
            src={Bastien}
            className={styles.photo}
          />
          <h3>Bastien</h3>
          <h4>Developer Web Junior</h4>
        </span>

        <span className={styles.Kana}>
          <img 
            alt="Portrait of Kana" 
            src={Kana} 
            className={styles.photo} 
          />
          <h3>Kana</h3>
          <h4>Developer Web Junior</h4>
        </span>
      </div>
    </div>
  );
}

export default AboutUs;
