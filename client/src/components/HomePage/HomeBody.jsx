import image from "../../assets/images/planet.png";
import styles from "./homebody.module.css";

function HomeBody() {
  return (
    <div className={styles.divClass}>
      <div className={styles.divTitle}>
        <h1 className={styles.title}>
          <span>FIND</span> <span>YOUR</span>
          <span>PUBLIC</span> HOLIDAYS !
        </h1>
      </div>
      <div className={styles.divImage}>
        <img className={styles.image} src={image} alt="Planet" />
      </div>
    </div>
  );
}

export default HomeBody;
