import styles from "./title.module.css";
import Buble from "../../../assets/images/buble.png";

function Title() {
  return (
    <div className={styles.firstDiv}>
      <div className={styles.classBuble}>
        <img src={Buble} alt="buble" className={styles.imageBuble} />
      </div>
      <div className={styles.divClass}>
        <h1 className={styles.title}>
          Find <br /> your
          <br /> holidays
        </h1>
      </div>
    </div>
  );
}

export default Title;
