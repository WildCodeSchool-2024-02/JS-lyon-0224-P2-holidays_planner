import styles from "./aboutusmain.module.css";
import Avatar from "../../../assets/images/avatar.png";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1>About team</h1>
      <section className={styles.profileAdeline}>
        <img alt="imageAdeline" src={Avatar} />
        <h2>Adeline</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          architecto!
        </p>
      </section>
      <section className={styles.profileBastien}>
        <img alt="imageBastien " src={Avatar} />
        <h2>Bastien</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          iste.
        </p>
      </section>

      <section className={styles.profileKana}>
        <img alt="imageKana" src={Avatar} />
        <h2>Kana</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          dolorem.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
