import image from "../../assets/images/planet.png";
import styles from "./homebody.module.css";

function HomeBody() {
  return (
    <div className={styles.divClass}>
      <h1>FIND YOUR PUBLIC HOLIDAYS !</h1>
      <img className={styles.image} src={image} alt="Planet" />
    </div>
  );
}

export default HomeBody;
