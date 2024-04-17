import styles from "./aboutusmain.module.css";
import Avatar from "../../../assets/images/avatar.png";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <section className={styles.profileAdeline}>
        <img alt="imageAdeline" src={Avatar} />
        <p>lorem </p>
      </section>

      <section className={styles.profileBastien}>
        <img alt="imageBastien " src={Avatar} />
        <p>lorem</p>
      </section>

      <section className={styles.profileKana}>
        <img alt="imageKana" src={Avatar} />
        <p> lorem </p>
      </section>
    </div>
  );
}

export default AboutUs;
