import styles from "./title.module.css";
import logo from "../../../assets/images/planet.png";

function Title() {
  return (
    <div className={styles.divClass}>
      <h1 className={styles.title}>
        <span className={styles.findYour}>Find your public</span>{" "}
        <span className={styles.holidays}> holidays </span>
      </h1>
      <div className={styles.image}>
        <img className={styles.logo} src={logo} alt="planet" />
      </div>
    </div>
  );
}

export default Title;
